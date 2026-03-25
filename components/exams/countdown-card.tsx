import { ReactNode } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

type CountdownCardProps = {
  nextExam: ExamRecord | null;
  secondsRemaining: number;
  reminderControl?: ReactNode;
};

export function CountdownCard({
  nextExam,
  secondsRemaining,
  reminderControl
}: CountdownCardProps) {
  const days = Math.floor(secondsRemaining / 86400);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const formatted = [days, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(" : ");

  return (
    <Card>
      <CardHeader className="space-y-0.5 pb-2.5">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-[15px]">Countdown</CardTitle>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {nextExam?.courseCode ?? "Completed"}
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-[0.9rem] border border-border bg-timer px-3 py-2.5 text-center shadow-[0_0_0_1px_rgba(17,17,17,0.02)] sm:px-3.5 dark:shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_12px_30px_rgba(139,92,246,0.16)]">
          <motion.p
            key={formatted}
            initial={{ opacity: 0.68, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="whitespace-nowrap font-mono text-[1.3rem] font-semibold leading-none tracking-[0.12em] text-timer-foreground sm:text-[1.45rem] dark:[text-shadow:0_0_18px_rgba(139,92,246,0.16)]"
          >
            {formatted}
          </motion.p>
          <div className="mt-1.5 grid grid-cols-3 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span>Days</span>
            <span>Min</span>
            <span>Sec</span>
          </div>
        </div>
        {reminderControl}
      </CardContent>
    </Card>
  );
}
