"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell, BellOff, BellRing } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getExamDateTime, hasSpecifiedExamTime } from "@/lib/data/exams";
import { ExamRecord } from "@/lib/types/exams";

type ExamReminderControlProps = {
  exams: ExamRecord[];
};

type ReminderPermissionState = NotificationPermission | "unsupported";

const REMINDER_ENABLED_STORAGE_KEY = "exam-reminders-enabled";
const REMINDER_SENT_STORAGE_PREFIX = "exam-reminder-sent:";
const REMINDER_THRESHOLDS = [
  { minutes: 60, key: "60m", label: "1 hour" },
  { minutes: 30, key: "30m", label: "30 minutes" }
] as const;
const CHECK_INTERVAL_MS = 30_000;
const TRIGGER_WINDOW_MS = 65_000;

function getReminderKey(exam: ExamRecord, thresholdKey: string) {
  return `${REMINDER_SENT_STORAGE_PREFIX}${exam.slug}:${exam.date}:${exam.time}:${thresholdKey}`;
}

export function ExamReminderControl({ exams }: ExamReminderControlProps) {
  const [permissionState, setPermissionState] = useState<ReminderPermissionState>("unsupported");
  const [enabled, setEnabled] = useState(false);

  const timedExams = useMemo(
    () => exams.filter((exam) => hasSpecifiedExamTime(exam)),
    [exams]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncState = () => {
      if (!("Notification" in window)) {
        setPermissionState("unsupported");
        setEnabled(false);
        return;
      }

      setPermissionState(Notification.permission);
      setEnabled(window.localStorage.getItem(REMINDER_ENABLED_STORAGE_KEY) === "true");
    };

    const timeoutId = window.setTimeout(syncState, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      permissionState !== "granted" ||
      !enabled ||
      !timedExams.length
    ) {
      return;
    }

    const checkReminders = () => {
      const now = Date.now();

      for (const exam of timedExams) {
        const examTime = getExamDateTime(exam).getTime();

        if (examTime <= now) {
          continue;
        }

        const timeUntilExam = examTime - now;

        for (const threshold of REMINDER_THRESHOLDS) {
          const thresholdMs = threshold.minutes * 60_000;
          const reminderKey = getReminderKey(exam, threshold.key);

          if (window.localStorage.getItem(reminderKey)) {
            continue;
          }

          if (
            timeUntilExam <= thresholdMs &&
            timeUntilExam > thresholdMs - TRIGGER_WINDOW_MS
          ) {
            try {
              new Notification(`${exam.courseCode} starts in ${threshold.label}`, {
                body: `${exam.courseTitle} exam begins at ${exam.time}`,
                tag: reminderKey
              });
              window.localStorage.setItem(reminderKey, String(now));
            } catch {
              return;
            }
          }
        }
      }
    };

    checkReminders();
    const intervalId = window.setInterval(checkReminders, CHECK_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [enabled, permissionState, timedExams]);

  async function handleToggle() {
    if (typeof window === "undefined" || !("Notification" in window)) {
      return;
    }

    if (permissionState === "denied") {
      return;
    }

    if (permissionState === "granted") {
      const nextEnabled = !enabled;
      setEnabled(nextEnabled);
      window.localStorage.setItem(REMINDER_ENABLED_STORAGE_KEY, String(nextEnabled));
      return;
    }

    const nextPermission = await Notification.requestPermission();
    setPermissionState(nextPermission);

    if (nextPermission === "granted") {
      setEnabled(true);
      window.localStorage.setItem(REMINDER_ENABLED_STORAGE_KEY, "true");
    }
  }

  const buttonLabel =
    permissionState === "unsupported"
      ? "Unavailable"
      : permissionState === "denied"
        ? "Blocked"
        : permissionState === "granted"
          ? enabled
            ? "On"
            : "Off"
          : "Enable";

  const statusText =
    permissionState === "unsupported"
      ? "Browser alerts are not available here."
      : permissionState === "denied"
        ? "Notifications are blocked in browser settings."
        : permissionState === "granted" && enabled
          ? "1 hour and 30 minute reminders are active for timed exams."
          : "Timed exams can alert you 1 hour and 30 minutes before they begin.";

  const Icon =
    permissionState === "granted" && enabled
      ? BellRing
      : permissionState === "denied" || permissionState === "unsupported"
        ? BellOff
        : Bell;

  return (
    <div className="mt-3 rounded-[0.9rem] border border-border/70 bg-background/70 px-3 py-2.5 text-left">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Reminders
          </p>
          <p className="mt-1 text-[12px] leading-5 text-muted-foreground">{statusText}</p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-8 shrink-0 gap-1.5 px-3 text-[12px]"
          onClick={handleToggle}
          disabled={permissionState === "unsupported" || permissionState === "denied"}
        >
          <Icon className="h-3.5 w-3.5" />
          <span>{buttonLabel}</span>
        </Button>
      </div>
    </div>
  );
}
