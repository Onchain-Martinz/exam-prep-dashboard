import { cookies } from "next/headers";

import { BackLink } from "@/components/layout/back-link";
import { PageShell } from "@/components/layout/page-shell";
import { PageReveal } from "@/components/layout/page-reveal";
import { Card, CardContent } from "@/components/ui/card";
import {
  FEEDBACK_ADMIN_COOKIE_NAME,
  isFeedbackAdminProtectionEnabled,
  isValidFeedbackAdminSession
} from "@/lib/feedback-admin";
import { listFeedbackEntries } from "@/lib/feedback-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FeedbackAdminPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export default async function FeedbackAdminPage({ searchParams }: FeedbackAdminPageProps) {
  const params = (await searchParams) ?? {};
  const cookieStore = await cookies();
  const adminProtected = isFeedbackAdminProtectionEnabled();
  const authenticated = adminProtected
    ? isValidFeedbackAdminSession(cookieStore.get(FEEDBACK_ADMIN_COOKIE_NAME)?.value)
    : true;
  const feedbackEntries = authenticated ? await listFeedbackEntries() : [];

  return (
    <PageShell>
      <div className="space-y-6 sm:space-y-7">
        <PageReveal>
          <BackLink href="/">Back to calendar</BackLink>
        </PageReveal>

        <PageReveal delay={0.04}>
          <section className="rounded-[1.5rem] border border-border/60 bg-card px-4 py-5 shadow-calm sm:px-6 sm:py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Internal
                </p>
                <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Feedback Admin
                </h1>
                <p className="text-sm leading-6 text-muted-foreground">
                  Review feedback submissions in one simple list.
                </p>
              </div>

              {adminProtected && authenticated ? (
                <form action="/api/feedback-admin/logout" method="post">
                  <button
                    type="submit"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Sign out
                  </button>
                </form>
              ) : null}
            </div>
          </section>
        </PageReveal>

        {!authenticated ? (
          <PageReveal delay={0.08}>
            <Card>
              <CardContent className="p-4 sm:p-5">
                <form action="/api/feedback-admin/login" method="post" className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-[15px] font-semibold text-foreground">Admin access</h2>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Enter the configured admin password to view feedback submissions.
                    </p>
                  </div>

                  <label className="block space-y-1.5">
                    <span className="text-[12px] font-medium text-muted-foreground">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="h-11 w-full rounded-[0.95rem] border border-input bg-background px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                      required
                    />
                  </label>

                  {params.error === "invalid-password" ? (
                    <p className="text-sm leading-6 text-[rgb(185,28,28)] dark:text-[rgb(248,113,113)]">
                      Invalid password. Try again.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Continue
                  </button>
                </form>
              </CardContent>
            </Card>
          </PageReveal>
        ) : (
          <PageReveal delay={0.08}>
            <div className="space-y-3 sm:space-y-4">
              {feedbackEntries.length ? (
                feedbackEntries.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {formatTimestamp(entry.createdAt)}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {entry.name ?? "Anonymous"}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-foreground">
                        {entry.message}
                      </p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-sm leading-6 text-muted-foreground">
                      No feedback submissions yet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </PageReveal>
        )}
      </div>
    </PageShell>
  );
}
