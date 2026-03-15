"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

type ExamCalendarGridProps = {
  exams: ExamRecord[];
  currentTime: number;
};

type CalendarDay = {
  key: string;
  dayNumber: string;
  exams: ExamRecord[];
};

export function ExamCalendarGrid({ exams, currentTime }: ExamCalendarGridProps) {
  const examMap = exams.reduce<Map<string, ExamRecord[]>>((acc, exam) => {
    const items = acc.get(exam.date) ?? [];
    items.push(exam);
    acc.set(exam.date, items);
    return acc;
  }, new Map());

  const finalExamDate = parseDate(exams.at(-1)?.date ?? exams[0]?.date ?? formatDate(new Date()));
  const today = startOfDay(new Date(currentTime));
  const startDate = today.getTime() <= finalExamDate.getTime() ? today : finalExamDate;
  const days = buildCalendarDays(startDate, finalExamDate, examMap);

  return (
    <Card>
      <CardHeader className="space-y-0.5">
        <CardTitle className="text-[15px] sm:text-base">Exam calendar</CardTitle>
      </CardHeader>
      <CardContent className="pt-0.5">
        <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10">
          {days.map((day) => (
            <CalendarBox key={day.key} day={day} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CalendarBox({ day }: { day: CalendarDay }) {
  const isExamDay = day.exams.length > 0;
  const classes = [
    "flex aspect-square min-h-[4.35rem] flex-col rounded-[0.85rem] border p-2 text-left transition-[transform,border-color,box-shadow,background-color] duration-200 ease-out sm:min-h-[4.7rem] sm:p-2.5",
    isExamDay
      ? "border-[rgb(var(--exam-day-border))] bg-[rgb(var(--exam-day))] text-[rgb(var(--exam-day-foreground))] shadow-[0_1px_2px_rgba(17,17,17,0.04)] dark:shadow-[0_0_0_1px_rgba(124,92,250,0.18),0_14px_30px_rgba(139,92,246,0.18)]"
      : "border-border bg-card text-foreground"
  ].join(" ");

  const inner = (
    <>
      <span
        className={[
          "font-mono text-[13px] font-semibold leading-none tabular-nums sm:text-[15px]",
          isExamDay ? "text-[rgb(var(--exam-day-foreground))]" : "text-foreground"
        ].join(" ")}
      >
        {day.dayNumber}
      </span>

      <div className="mt-1 space-y-0.5 overflow-hidden">
        {day.exams.map((exam) => (
          <span
            key={exam.slug}
            className={[
              "block text-[8.5px] font-medium uppercase leading-[1.15] tracking-[0.03em] sm:text-[9.5px]",
              isExamDay ? "text-[rgb(var(--exam-day-foreground))]" : "text-muted-foreground"
            ].join(" ")}
          >
            {compactCourseCode(exam.courseCode)}
          </span>
        ))}
      </div>
    </>
  );

  if (!isExamDay) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <Link
      href={`/date/${day.key}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
    >
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`${classes} group-hover:border-[rgb(var(--exam-day-hover))] group-hover:bg-[rgb(var(--exam-day-hover))] group-hover:shadow-[0_6px_14px_rgba(17,17,17,0.08)] dark:group-hover:shadow-[0_0_0_1px_rgba(159,107,255,0.24),0_18px_38px_rgba(139,92,246,0.22)]`}
      >
        {inner}
      </motion.div>
    </Link>
  );
}

function buildCalendarDays(
  startDate: Date,
  endDate: Date,
  examMap: Map<string, ExamRecord[]>
) {
  const days: CalendarDay[] = [];
  const cursor = new Date(startDate);

  while (cursor.getTime() <= endDate.getTime()) {
    const key = formatDate(cursor);
    days.push({
      key,
      dayNumber: String(cursor.getDate()),
      exams: examMap.get(key) ?? []
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function parseDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function compactCourseCode(courseCode: string) {
  return courseCode.replace(/\s+/g, "");
}
