import { TopicKeyPointsItem } from "@/components/exams/topic-key-points-item";
import { Card, CardContent } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

export function TopicsPanel({ exam }: { exam: ExamRecord }) {
  const hasTopicKeyPoints = Boolean(exam.topicKeyPoints?.length);

  if (!exam.topicsToRead.length && !hasTopicKeyPoints) {
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

  if (hasTopicKeyPoints) {
    return (
      <div className="space-y-2.5 sm:space-y-3">
        {exam.topicKeyPoints?.map((item) => (
          <TopicKeyPointsItem key={`${exam.slug}-${item.topic}`} item={item} />
        ))}
      </div>
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
