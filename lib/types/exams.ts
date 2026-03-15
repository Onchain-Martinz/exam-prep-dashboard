export type QuestionSet = {
  instruction: string;
  items: string[];
};

export type ExamRecord = {
  slug: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  time: string;
  pastQuestions: QuestionSet | null;
  topicsToRead: string[];
};
