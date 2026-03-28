import { QuestionRevealCard } from "@/components/exams/question-reveal-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExamRecord } from "@/lib/types/exams";

export function PastQuestionsPanel({ exam }: { exam: ExamRecord }) {
  const hasAnswerReveals = Boolean(exam.answerReveals?.length);

  if (!exam.pastQuestions && !hasAnswerReveals) {
    return (
      <Card>
        <CardContent className="p-4 sm:p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            No past questions provided for this course.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {exam.pastQuestions ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-[15px]">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {exam.pastQuestions.instruction}
            </p>
          </CardContent>
        </Card>
      ) : null}

      <div className="space-y-2.5 sm:space-y-3">
        {hasAnswerReveals
          ? exam.answerReveals?.map((item) => (
              <QuestionRevealCard
                key={`${exam.slug}-answer-${item.questionNumber}`}
                item={item}
              />
            ))
          : exam.pastQuestions?.items.map((item, index) => (
              <Card key={`${exam.slug}-${index}`}>
                <CardContent className="p-4 sm:p-5">
                  <pre className="max-w-3xl whitespace-pre-wrap break-words font-sans text-sm leading-6 text-foreground">
                    {item}
                  </pre>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
}
