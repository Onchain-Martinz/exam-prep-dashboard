import { Card, CardContent } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

export function TopicsPanel({ exam }: { exam: ExamRecord }) {
  if (!exam.topicsToRead.length) {
    return (
      <Card>
        <CardContent className="p-4 sm:p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Topics to read will be added here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4 sm:p-5">
        <div className="space-y-4">
          {exam.topicsToRead.map((topic) => (
            <pre
              key={topic}
              className="max-w-3xl whitespace-pre-wrap break-words font-sans text-sm leading-6 text-foreground"
            >
              {topic}
            </pre>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
