"use client";

import { useEffect, useMemo, useState } from "react";

import { ExamCalendarGrid } from "@/components/calendar/exam-calendar-grid";
import { CountdownCard } from "@/components/exams/countdown-card";
import { OverviewCard } from "@/components/exams/overview-card";
import { getExamDateTime, isUpcomingExam } from "@/lib/data/exams";
import { ExamRecord } from "@/lib/types/exams";

type HomeDashboardProps = {
  exams: ExamRecord[];
};

export function HomeDashboard({ exams }: HomeDashboardProps) {
  const [currentTime, setCurrentTime] = useState(() =>
    exams[0] ? getExamDateTime(exams[0]).getTime() : 0
  );

  useEffect(() => {
    const syncClock = () => {
      setCurrentTime(Date.now());
    };

    const frameId = window.requestAnimationFrame(syncClock);
    const intervalId = window.setInterval(syncClock, 1000);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearInterval(intervalId);
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

  const millisecondsRemaining = nextExam
    ? Math.max(getExamDateTime(nextExam).getTime() - currentTime, 0)
    : 0;

  if (!exams.length) {
    return null;
  }

  return (
    <div className="space-y-3.5 sm:space-y-4">
      <section className="grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_19rem]">
        <OverviewCard totalCourses={totalCourses} examsLeft={examsLeft} nextExam={nextExam} />
        <CountdownCard nextExam={nextExam} millisecondsRemaining={millisecondsRemaining} />
      </section>

      <ExamCalendarGrid exams={exams} currentTime={currentTime} />
    </div>
  );
}
