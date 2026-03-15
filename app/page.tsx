import { HomeDashboard } from "@/components/exams/home-dashboard";
import { PageShell } from "@/components/layout/page-shell";
import { PageReveal } from "@/components/layout/page-reveal";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getAllExams } from "@/lib/data/exams";

export default function HomePage() {
  const exams = getAllExams();

  return (
    <PageShell>
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        <PageReveal>
          <header className="flex items-start justify-between gap-3 px-1 py-0.5 sm:px-0">
            <div className="min-w-0 flex-1 space-y-1">
              <h1 className="text-[1.4rem] font-semibold tracking-[-0.035em] text-foreground sm:text-[1.55rem]">
                Exam Study Plan
              </h1>
              <p className="text-sm text-muted-foreground">
                Track upcoming papers and open each exam when you need it.
              </p>
            </div>
            <div className="shrink-0 pt-0.5">
              <ThemeToggle />
            </div>
          </header>
        </PageReveal>

        <PageReveal delay={0.05}>
          <HomeDashboard exams={exams} />
        </PageReveal>
      </div>
    </PageShell>
  );
}
