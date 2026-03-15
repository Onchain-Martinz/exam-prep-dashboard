import { notFound } from "next/navigation";
import type { Route } from "next";

import { ExamContentTabs } from "@/components/exams/exam-content-tabs";
import { BackLink } from "@/components/layout/back-link";
import { PageShell } from "@/components/layout/page-shell";
import { PageReveal } from "@/components/layout/page-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { formatDayMonth, getExamBySlug } from "@/lib/data/exams";

type ExamPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExamDetailPage({ params }: ExamPageProps) {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) {
    notFound();
  }

  return (
    <PageShell>
      <div className="space-y-6 sm:space-y-7">
        <PageReveal>
          <BackLink href={`/date/${exam.date}` as Route}>Back to date</BackLink>
        </PageReveal>

        <PageReveal delay={0.04}>
          <section className="rounded-[1.5rem] border border-border/60 bg-card px-4 py-5 shadow-calm sm:px-6 sm:py-6">
            <div className="space-y-1">
              <p className="text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
                {exam.courseCode}
              </p>
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                {exam.courseTitle}
              </h1>
              <p className="text-sm text-muted-foreground">
                {formatDayMonth(exam.date)} — {exam.time}
              </p>
            </div>
          </section>
        </PageReveal>

        <PageReveal delay={0.08}>
          <Card>
            <CardContent className="p-4 sm:p-5">
              <ExamContentTabs exam={exam} />
            </CardContent>
          </Card>
        </PageReveal>
      </div>
    </PageShell>
  );
}
