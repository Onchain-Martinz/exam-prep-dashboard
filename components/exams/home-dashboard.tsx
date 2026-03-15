"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { ExamCalendarGrid } from "@/components/calendar/exam-calendar-grid";
import { CountdownCard } from "@/components/exams/countdown-card";
import { OverviewCard } from "@/components/exams/overview-card";
import { getExamDateTime, isUpcomingExam } from "@/lib/data/exams";
import { ExamRecord } from "@/lib/types/exams";

type HomeDashboardProps = {
  exams: ExamRecord[];
};

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function HomeDashboard({ exams }: HomeDashboardProps) {
  const [currentTime, setCurrentTime] = useState(() => getExamDateTime(exams[0]).getTime());

  useIsomorphicLayoutEffect(() => {
    const syncClock = () => {
      setCurrentTime(Date.now());
    };

    const timeoutId = window.setTimeout(syncClock, 0);
    const id = window.setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(id);
    };
  }, []);

  const totalCourses = useMemo(
    () => new Set(exams.map((exam) => exam.courseCode)).size,
    [exams]
  );

  const upcomingExams = useMemo(() => {
    const referenceDate = new Date(currentTime);
    return exams.filter((exam) => isUpcomingExam(exam, referenceDate));
  }, [currentTime, exams]);

  const nextExam = upcomingExams[0] ?? null;
  const examsLeft = upcomingExams.length;

  const secondsRemaining = nextExam
    ? Math.max(Math.floor((getExamDateTime(nextExam).getTime() - currentTime) / 1000), 0)
    : 0;

  if (!exams.length) {
    return null;
  }

  return (
    <div className="space-y-3.5 sm:space-y-4">
      <section className="grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_19rem]">
        <OverviewCard totalCourses={totalCourses} examsLeft={examsLeft} nextExam={nextExam} />
        <CountdownCard nextExam={nextExam} secondsRemaining={secondsRemaining} />
      </section>

      <ExamCalendarGrid exams={exams} currentTime={currentTime} />
    </div>
  );
}
