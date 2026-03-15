import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <PageShell>
      <Card className="mx-auto max-w-xl">
        <CardContent className="space-y-4 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
            Not found
          </p>
          <h1 className="font-serif text-4xl tracking-[-0.04em] text-foreground">
            This page does not exist.
          </h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Return to the exam calendar and open one of the available dates.
          </p>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </CardContent>
      </Card>
    </PageShell>
  );
}
