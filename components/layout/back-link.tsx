import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Route } from "next";

export function BackLink({ href, children }: { href: Route; children: string }) {
  return (
    <Link
      href={href}
      className="mb-4 inline-flex min-h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background sm:mb-5"
    >
      <ArrowLeft className="size-3.5" />
      <span>{children}</span>
    </Link>
  );
}
