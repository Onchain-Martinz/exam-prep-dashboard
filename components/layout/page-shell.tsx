import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("pb-24 pt-4 sm:pb-16 sm:pt-5 lg:pb-16 lg:pt-6", className)}>
      <div className="container">{children}</div>
    </main>
  );
}
