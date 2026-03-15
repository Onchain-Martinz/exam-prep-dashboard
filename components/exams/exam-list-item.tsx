import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

export function ExamListItem({ exam }: { exam: ExamRecord }) {
  return (
    <Link
      href={`/exam/${exam.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
    >
      <Card className="transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:border-foreground/10 group-hover:shadow-calm">
        <CardContent className="flex items-center justify-between gap-3 p-3.5 sm:p-4">
          <div className="min-w-0 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {exam.courseCode}
            </p>
            <h2 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-foreground sm:text-base">
              {exam.courseTitle}
            </h2>
            <p className="text-[13px] text-muted-foreground">{exam.time}</p>
          </div>
          <ArrowRight className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </CardContent>
      </Card>
    </Link>
  );
}
