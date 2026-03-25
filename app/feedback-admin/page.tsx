import { BackLink } from "@/components/layout/back-link";
import { PageShell } from "@/components/layout/page-shell";
import { PageReveal } from "@/components/layout/page-reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function FeedbackAdminPage() {
  return (
    <PageShell>
      <div className="space-y-6 sm:space-y-7">
        <PageReveal>
          <BackLink href="/">Back to calendar</BackLink>
        </PageReveal>

        <PageReveal delay={0.04}>
          <section className="rounded-[1.5rem] border border-border/60 bg-card px-4 py-5 shadow-calm sm:px-6 sm:py-6">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Internal
              </p>
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                Feedback Admin
              </h1>
              <p className="text-sm leading-6 text-muted-foreground">
                Feedback submissions now go directly to Netlify Forms instead of local file
                storage.
              </p>
            </div>
          </section>
        </PageReveal>

        <PageReveal delay={0.08}>
          <Card>
            <CardContent className="space-y-3 p-4 sm:p-5">
              <p className="text-sm leading-6 text-foreground">
                Open your Netlify site dashboard and view the
                {" "}
                <span className="font-medium">exam-feedback</span>
                {" "}
                form to review submissions.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                This page stays in place as a stable internal reference, but the old file-backed
                inbox is intentionally disabled so production no longer depends on writable
                server storage.
              </p>
            </CardContent>
          </Card>
        </PageReveal>
      </div>
    </PageShell>
  );
}
