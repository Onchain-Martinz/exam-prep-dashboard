export type QuestionSet = {
  instruction: string;
  items: string[];
};

export type AnswerReveal = {
  questionNumber: string | number;
  question: string;
  answer: string;
};

export type TopicKeyPoints = {
  topic: string;
  points: string[];
};

export type ExamRecord = {
  slug: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  time: string;
  pastQuestions: QuestionSet | null;
  topicsToRead: string[];
  answerReveals?: AnswerReveal[];
  topicKeyPoints?: TopicKeyPoints[];
};
