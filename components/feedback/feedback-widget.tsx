"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, X } from "lucide-react";

import { FEEDBACK_FORM_NAME } from "@/components/feedback/netlify-feedback-form";
import { Button } from "@/components/ui/button";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function FeedbackWidget() {
  const nameId = useId();
  const messageId = useId();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (submissionState !== "success") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setOpen(false);
      setName("");
      setMessage("");
      setSubmissionState("idle");
      setErrorMessage("");
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [submissionState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      setSubmissionState("error");
      setErrorMessage("Please enter your feedback before submitting.");
      return;
    }

    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const formPayload = new URLSearchParams();
      formPayload.set("form-name", FEEDBACK_FORM_NAME);
      formPayload.set("name", name.trim());
      formPayload.set("message", message.trim());
      formPayload.set("bot-field", "");

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: formPayload.toString()
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        throw new Error(payload?.error || "Unable to submit feedback right now.");
      }

      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit feedback right now."
      );
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setSubmissionState("idle");
          setErrorMessage("");
        }}
        className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] right-3 z-40 inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-card/95 px-3.5 text-[13px] font-medium text-foreground shadow-calm backdrop-blur-sm transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background sm:bottom-4 sm:right-4"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <MessageSquareText className="h-4 w-4 text-muted-foreground" />
        <span>Feedback</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-background/55 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-[2px] sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="feedback-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-full max-w-md rounded-[1.35rem] border border-border/70 bg-card p-4 shadow-calm sm:rounded-[1.5rem] sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <h2
                    id="feedback-title"
                    className="text-base font-semibold tracking-[-0.02em] text-foreground"
                  >
                    Share feedback
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Send a quick note without leaving the page.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                  aria-label="Close feedback form"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form
                className="mt-4 space-y-3"
                action="/"
                method="POST"
                name={FEEDBACK_FORM_NAME}
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value={FEEDBACK_FORM_NAME} />
                <input type="hidden" name="bot-field" value="" />
                <label className="block space-y-1.5">
                  <span className="text-[12px] font-medium text-muted-foreground">
                    Name (optional)
                  </span>
                  <input
                    id={nameId}
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    maxLength={80}
                    className="h-11 w-full rounded-[0.95rem] border border-input bg-background px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                    placeholder="Your name"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-[12px] font-medium text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    id={messageId}
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={5}
                    maxLength={2000}
                    className="min-h-[132px] w-full resize-y rounded-[1rem] border border-input bg-background px-3 py-2.5 text-sm leading-6 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                    placeholder="What should be improved?"
                  />
                </label>

                {submissionState === "error" && errorMessage ? (
                  <p className="text-sm leading-6 text-[rgb(185,28,28)] dark:text-[rgb(248,113,113)]">
                    {errorMessage}
                  </p>
                ) : null}

                {submissionState === "success" ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    Feedback submitted successfully.
                  </p>
                ) : null}

                <div className="flex items-center justify-end gap-2 pt-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                  <Button type="submit" size="sm" disabled={submissionState === "submitting"}>
                    {submissionState === "submitting" ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
