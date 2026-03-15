import { ExamRecord } from "@/lib/types/exams";

const topicsByCourse: Record<string, string[]> = {
  "PSY 105": [`ETHICS IN PSYCHOLOGY 

* UNDERSTANDING THE HUMAN MIND AND BEHAVIOR: THE PHILOSOPHICAL PERSPECTIVE 
* ETHICS - INTRODUCTION TO ETHICS IN PSYCHOLOGY 
* ETHICAL THEORIES 
* ETHICS IN SCIENTIFIC RESEARCH 
* REDRESSING UNETHICAL BEHAVIOR 
* LOBBYING IN PROMOTING PSYCHOLOGY IN PUBLIC SPACE 
* INTEGRITY IN PSYCHOLOGICAL PRACTICE 
* EMOTIONAL INTELLIGENCE 
* INATTENTIONAL BLINDNESS OR INATTENTIONAL AMNESIA 
* UNDERSTANDING HUMAN MEMORY`],
  "GST 111": [`GST 111

* ENGLISH LANGUAGE SOUND PATTERNS 
* CLASSES OF ENGLISH LANGUAGE WORDS
* THE SENTENCES IN ENGLISH LANGUAGE 
* ENGLISH GRAMMAR AND USAGE TENSE, MOOD, MODALITY AND CONCORD 
* WRITING ACTIVITIES IN ENGLISH LANGUAGE 
* COMPREHENSION STRATEGIES IN ENGLISH LANGUAGE`],
  "SOC 101": [`SOCIOLOGY 

* DEFINITION OF SOCIOLOGY 
* RELATIONSHIP BETWEEN SOCIOLOGY AND OTHER SOCIAL SCIENCES 
* THE SCIENTIFIC NATURE OF SOCIOLOGY 
* METHOD OF SOCIAL RESEARCH 
* AIMS  AND SCOPE OF SOCIAL RESEARCH `],
  "IGB 107": [`IGB 107

* MMALITE
* MMALITE IDE NA IMU ASUSU IGBO
* MKPURUUDAASUSU NA MKPURUEDEMEDE 
* OGAN OKWU/NJIAKPO
* UDAUME NA NDAKORITA UDAUME
* MYIRIUDAUME
* MGBAKWUNYE
* MKPURUOKWU, MMEDE OKWU NA MMUBAOKWU
* OLULO NANDAPU UDAUME
* NKEJIOKWU
* NKEJI ASUSU
* NKEJIASUSU NDIOZO
* NKEBIOKWU
* AHIRIOKWU
* UDAOLU IGBO
* AKARA EDEMEDE`],
  "PSY 103": [`LEARNING PROCESS 

* MEANING AND NATURE OF LEARNING 
* HISTORICAL BEGINNING OF LEARNING 
* MOTIVATION AND LEARNING 
* THEORY OF LEARNING 
* MEMORY
* FORGETTING AND RETRIEVAL OF INFORMATION 
* AMNESIA
* ARTIFICIAL INTELLIGENCE (HE DIDN'T TOUCH IT)`],
  "BIO 101": [`BIOLOGY 

* CELL STRUCTURE AND ORGANISMS 
* Functions of the Cell
* LIVING ORGANISMS AND ThEIR GENERAL REPRODUCTION 
* INTERRELATIONSHIP OR ASSOCIATION BETWEEN ORGANISMS 
* HEREDITARY AND EVOLUTION 
* Habitat, characteristics and life - ECOLOGY`],
  "PSY 117": [`COMMUNITY PSYCHOLOGY 

* INTRODUCTION TO COMMUNITY PSYCHOLOGY 
* History, Systems and Goals of community psychology 
* Research methods in community psychology 
* Socio-cultural factors in psychopathology 
* Community humanitarian and social services`],
  "PSY 101": [`INTRODUCTION TO PSYCHOLOGY 

* THE CONCEPT OF PSYCHOLOGY 
* HISTORICAL DEVELOPMENT OF PSYCHOLOGY 
* GOALS OF PSYCHOLOGY 
* MAJOR SCHOOLS OF PSYCHOLOGY 
* THE SCIENTIFIC METHOD OF STUDYING BEHAVIOR 
* RELATIONSHIP BETWEEN PSYCHOLOGY AND OTHER SCIENCES AND DISCIPLINES
* MAJOR BRANCHES OF PSYCHOLOGY 
* HUMAN NEEDS
* EMOTIONS 
* LEARNING 
* ANXIETY`],
  "PSY 119": [`CRIME AND DELINQUENCY 

* THE CONCEPT OF DELINQUENCY 
* THE NIGERIAN JUVENILE JUSTICE SYSTEM 
* CAUSAL AND ASSOCIATED FACTORS IN JUVENILE DELINQUENCY 
* THEORIES OF JUVENILE DELINQUENCY 
* PREVENTION OF JUVENILE DELINQUENCY`],
  "PSY 115": [`ETHNICITY AND ETHNIC GROUP 

* ETHNICITY MEANING, APPROACH, CHARACTERISTICS AND STAGES
* Meaning of ethnic group 
* Types of Ethnic group 
* Ethnic conflict, causes, solution to ethnic conflict 
* PREJUDICES AND STEREOTYPE 
* Types of prejudices 
* Component of prejudice 
* Ways of reducing prejudices 
* Stereotypes - meaning, approaches, and strategies in reducing stereotypes
* NATION BUILDING AND NATIONALISM 
* Basic factors to nation building 
* Condition and challenges to nation building 
* Nationalism and goals of nationalism
* ETHNIC CRISES`],
  "PSY 111": [`QUANTITATIVE METHOD IN PSYCHOLOGY 

* DATA PRESENTATION 
* Tabular form
* Construction of the frequency distribution table 
* GRAPHICAL PRESENTATION 
* Histogram 
* Bar charts 
* Pie chart
* Frequency polygon 
* Cumulative frequency polygon (ogive)
* Percentage ogive
* MEASURES OF CENTRAL TENDENCY 
* Mean
* Median 
* Mode
* Range
* Variance 
* Standard deviation 
* Quartile 
* Semi-Inter quartile range 
* Mean deviation 
* SCALE OF MEASUREMENT`],
  "PSY 123": [`SPORTS PSYCHOLOGY 

* Meaning of sports psychology 
* Relevance and Aims of sports psychology 
* EMOTIONS 
* Roles and Sources of Emotions in athlete sport settings 
* MOTIVATION 
* Types of motivation 
* ANXIETY 
* Causes, Effects/signs/Symptoms of Anxiety in sports
* Manifestation of Anxiety in sports settings 
* Treatment approaches to anxiety`]
};

export const examRecords: ExamRecord[] = [
  {
    slug: "psy-103",
    courseCode: "PSY 103",
    courseTitle: "Learning Process",
    date: "2026-03-25",
    time: "12 PM – 2 PM",
    topicsToRead: topicsByCourse["PSY 103"],
    pastQuestions: {
      instruction: "Instruction: Answer any 4 questions",
      items: [
        "1. (A) Discuss the term Learning.\n(B) List and explain 5 characteristics of learning.",
        "2. (A) What is Classical Conditioning?\n(B) Explain 4 principles of Classical Conditioning.",
        "3. (A) List and explain 4 principles of Operant Conditioning.\n(B) Explain the 4 basic schedules of reinforcement.",
        "4. (A) List and explain 2 types of amnesia.\n(B) Explain 4 ways of preventing amnesia.",
        "5. (A) Discuss any 4 types of learning disability.\n(B) Discuss 4 ways of helping individuals with learning disability.",
        "6. Explain 4 factors that affect retrieval of information from memory."
      ]
    }
  },
  {
    slug: "psy-111",
    courseCode: "PSY 111",
    courseTitle: "Quantitative Method in Psychology",
    date: "2026-03-25",
    time: "3 PM – 6 PM",
    topicsToRead: topicsByCourse["PSY 111"],
    pastQuestions: {
      instruction: "Instruction: Answer four questions",
      items: [
        "Question 1\n\nThe following table shows loads in kilonewtons supported by a sample of 98 cables manufactured by DanyElia Groups.\n\nLoad 92–96 97–101 102–106 107–111 112–116 117–121\nNo. of Cables 10 15 19 24 18 12\n\ni. Compute the Mean using the coded value A = 104 / 5.\nii. Obtain the Cumulative Frequency (CF).\niii. Determine the class size.\niv. What is the upper boundary limit of the 3rd class?",
        "Question 2\n\nUsing the data of Question 1 compute:\n\na. 50th Percentile\nb. Mode",
        "Question 3\n\nSupposing the data below represents the Statutory Revenue Allocation to Local Governments (in billions) according to zones from Jan–Dec 2022\n\nLocal Govts Oru East Mbaitoli Orlu Mbaise Ikeduru\nAllocation (Billions) 5.9 2.3 3.4 2.5 2.7\n\na. Present the information in a pie chart.\nb. Discuss 3 methods of presenting statistical data.",
        "Question 4\n\nDetermine the following from the frequency table provided in Q1 above:\n\na. Mode\nb. Median\nc. Convert 0.6428 to percentage",
        "Question 5\n\nThe score of 35 students that took an assessment test on Law 121 is shown below:\n\n(The numbers are partially crossed out in the image, but visible values include:)\n\n23, 36, 40, 28, 31, 39, 27, 44, 32,\n48, 37, 33, 30, 57, 38, 29, 24, 26,\n24, 38, 36, 23, 19, 42, 30, 50, 18, 22,\n32, 28, 34, 38, 35, 41, 27\n\na. Present the information in a Grouped Frequency Distribution Table.\n\nb. Discuss the Scales of Measurement known to you.",
        "Question 6\n\nUsing the data of Question 5 compute the following measures:\n\na. Variance\nb. Mean Deviation"
      ]
    }
  },
  {
    slug: "psy-101",
    courseCode: "PSY 101",
    courseTitle: "Introduction to Psychology",
    date: "2026-03-26",
    time: "12 PM – 2 PM",
    topicsToRead: topicsByCourse["PSY 101"],
    pastQuestions: {
      instruction: "Instruction: Answer only four questions",
      items: [
        "1. (a) Amidst the seeming complexities surrounding human behaviours, it is still a fact that both human and animals’ behaviours are controlled by simple elements. Identify three of such elements and briefly discuss one.\n(b) Human learning is a continuous life process. Briefly explain the point at which you would accept that learning has taken place.",
        "2. (a) Daily life realities show that human needs are numerous and insatiable. Briefly discuss two basic human needs.\n(b) Identify two major goals of psychology and briefly discuss one.",
        "3. (a) Human behaviours can be simply divided into two broad forms. With three easy-to-understand points separate normal behaviours from abnormal ones.\n(b) The study of human behavior follows the principles of major scientific methods. Identify three of such methods and briefly discuss one.",
        "4. (a) No two individuals are behaviourally the same. Briefly discuss any two major factors responsible for individual differences among identical twins.\n(b) Briefly explain two ways that what is learned can be easily retained and retrieved when needed.",
        "5. (a) Identify two forms of human memory and discuss one.\n(b) Identify any four branches of psychology and briefly explain any two.",
        "6. (a) Psychology is seen in some quarters as a magic. With two points show your agreement or disagreement with this statement.\n(b) Briefly explain any three of the following concepts as used in this course:\n• Personality\n• Emotions\n• Attitudes\n• Memory\n• Behavior\n• Psychology"
      ]
    }
  },
  {
    slug: "psy-119",
    courseCode: "PSY 119",
    courseTitle: "Psychology of Crime & Delinquency",
    date: "2026-03-27",
    time: "3 PM – 6 PM",
    topicsToRead: topicsByCourse["PSY 119"],
    pastQuestions: {
      instruction: "Instruction: Answer any 4 questions",
      items: [
        "1. Discuss four characteristics of criminal law.",
        "2. (i) Define Crime.\n(ii) Discuss four sources of criminal law.",
        "3. State and describe five types of crime stated in the Nigerian criminal code and the specific punishment associated with each.",
        "4. Discuss four causal factors that predispose or precipitate crime and delinquency.",
        "5. Discuss and evaluate the radical and social conflict theory of crime and delinquency.",
        "6. Discuss four ways of preventing juvenile delinquency."
      ]
    }
  },
  {
    slug: "psy-115",
    courseCode: "PSY 115",
    courseTitle: "Psychology of Ethnicity & Ethnic Groups",
    date: "2026-04-01",
    time: "8 AM – 11 AM",
    topicsToRead: topicsByCourse["PSY 115"],
    pastQuestions: {
      instruction: "Instruction: Answer any 4 questions",
      items: [
        "1. Discuss 3 components of prejudice and the nature of their manifestation.",
        "2. Discuss 2 types of ethnic identity.",
        "3. Explain 5 strategic ways of reducing ethnic conflicts in Nigeria.",
        "4. With appropriate examples discuss 6 challenges to nation building in Nigeria.",
        "5. With appropriate examples illustrate 4 manifestations of ethnic hatred in Nigeria.",
        "6. Discuss any 5 ways in which xenophobia can be reduced."
      ]
    }
  },
  {
    slug: "psy-123",
    courseCode: "PSY 123",
    courseTitle: "Sport Psychology",
    date: "2026-04-07",
    time: "8 AM – 11 AM",
    topicsToRead: topicsByCourse["PSY 123"],
    pastQuestions: {
      instruction: "Instruction: Answer four questions",
      items: [
        "1. In sports performance, there is a kind of expectation/motivation an individual has towards sports activity.\n(a) As a psychologist, enumerate five factors that promote motivation in sports.\n(b) There are many factors directly involved in sports performance ranging from psychological factors to physical characteristics. Discuss the roles of sports psychologist in sports performance.",
        "2.\n(a) Identify five techniques that enhance athlete’s performance in sports competition.\n(b) List five objectives of sport coaching.\n(c) Discuss the relevance of sports psychology in the world of sports.",
        "3. (a) Discuss five sources of emotions in sports settings known to you.\n(b) Enumerate the importance of coaching in sports.",
        "4. The increased stress of competition can cause athletes to react both physically and mentally in ways that can negatively affect performance abilities. Consequently, identify the 4 C’s and discuss the importance of the 4 C’s in sports performance.",
        "5. As the same time as providing challenge and stimulation, sport also provides considerable uncertainty. The uncertainty may motivate others and induce anxiety in some athletes. Identify 5 effective strategies used by therapists to treat competition anxiety.",
        "6. There are various ways anxiety can manifest among sports men and women.\n(a) As a sport psychologist, identify them and discuss only two forms identified.\n(b) Enumerate three main causes of anxiety.\n(c) Briefly discuss two psychological strategies to reduce pre-performance anxiety and enhance optimum performance."
      ]
    }
  },
  {
    slug: "psy-117",
    courseCode: "PSY 117",
    courseTitle: "Community Psychology",
    date: "2026-04-07",
    time: "3 PM – 6 PM",
    topicsToRead: topicsByCourse["PSY 117"],
    pastQuestions: {
      instruction: "Instruction: Answer any 4 questions",
      items: [
        "1. (a) What do you understand by humanitarian services and social services?\n(b) In the light of (1a) above, discuss the essence of traditional social welfare in Africa.",
        "2. Taking a look at most towns in Nigeria, a lot of socio-economic problems are observed.\n(a) Outline at least two of these socio-economic problems.\n(b) Briefly discuss them indicating also their causes, effects and possible solutions.",
        "3. (a) State at least three major goals of community psychology.\n(b) With relevant illustrations state and explain three major preventive programmes that community psychologists can embark on.\n(c) Outline three criteria that a programme must meet to be considered a primary preventive programme.",
        "4. (a) Vividly explain comprehensively the course “Community Psychology”.\n(b) Enumerate with at least three points the essence of the course.",
        "5. List and explain three methods of data collection.",
        "6. As a would-be adviser in a government parastatal or private agency that has the well-being of citizens in mind, x-ray at least three research methods that a community psychologist can master in order to do a satisfactory work."
      ]
    }
  },
  {
    slug: "bio-101",
    courseCode: "BIO 101",
    courseTitle: "Biology",
    date: "2026-04-08",
    time: "8 AM – 11 AM",
    topicsToRead: topicsByCourse["BIO 101"],
    pastQuestions: {
      instruction: "Instruction: Answer any four questions",
      items: [
        "1. (a) What is pathology?\n(b) What is Klinefelter syndrome?\n(c) State 4 types of chromosome mutation.",
        "2. (a) Give an example of an organism that is:\n• Acellular\n• Bilaterally symmetrical\n(b) Describe the characteristics of Platyhelminthes.\n(c) Name a disease associated with Platyhelminthes.",
        "3. (a) Mention any 4 biological factors that determine ecological distribution.\n(b) Distinguish between commensalism and parasitism.",
        "4. Draw and label a typical plant cell showing 10–15 parts.",
        "5. (a) Outline the five kingdoms of living organisms.\n(b) Briefly discuss the kingdoms living organisms are classified into.",
        "6. Define the following terms:\n• Allele\n• Gene locus\n• Dominant and recessive gene\n• State the two laws of Mendel\n• State the three Mendelian gene genotypes"
      ]
    }
  },
  {
    slug: "soc-101",
    courseCode: "SOC 101",
    courseTitle: "Introduction to Sociology I",
    date: "2026-04-08",
    time: "12 PM – 2 PM",
    topicsToRead: topicsByCourse["SOC 101"],
    pastQuestions: {
      instruction: "Instruction: Answer only 4 questions",
      items: [
        "1. Outline and explain in detail Comte’s three stages of intellectual development.",
        "2. According to Comte, Sociology consists of two branches. Discuss.",
        "3. (a) Define Sociology.\n(b) Historically, the events that led to the development of sociology may be classified into three parts. Amplify.",
        "4. Explain the relationship between sociology and the following:\n(a) Economics\n(b) Political Science\n(c) History",
        "5. (a) What is culture?\n(b) Discuss any three types of culture known to you.",
        "6. (a) Define Social Control.\n(b) Mention and explain the five functions of social control."
      ]
    }
  },
  {
    slug: "psy-105",
    courseCode: "PSY 105",
    courseTitle: "Ethics in Psychology",
    date: "2026-04-08",
    time: "3 PM – 6 PM",
    topicsToRead: topicsByCourse["PSY 105"],
    pastQuestions: {
      instruction: "Instruction: Answer any 4 questions",
      items: [
        "1. (A) Define ethics and morality, highlighting three key distinctions.\n(B) Explain four ethical principles involved in the treatment of non-human subjects in psychological research.",
        "2. (A) List and explain three reasons why ethics is essential in psychological practice.\n(B) Identify and describe three consequences of unethical conduct in psychology.",
        "3. (A) Briefly discuss how a Nigerian psychologist should handle a client who confesses intent to harm another.\n(B) Outline three consequences of violating professional boundaries.",
        "4. (A) Identify and explain three unethical research practices and their consequences using Nigerian research contexts.\n(B) Briefly discuss three ways professionals in Nigeria can demonstrate integrity in ethical dilemmas.",
        "5. What ethical codes are violated when a psychologist discloses client information to a friend?",
        "6. (A) Explain two challenges psychologists face in maintaining boundaries with clients.\n(B) Briefly explain one importance of whistleblowing policy in Nigerian psychological practice."
      ]
    }
  },
  {
    slug: "gst-111",
    courseCode: "GST 111",
    courseTitle: "GST",
    date: "2026-04-13",
    time: "12 PM – 2 PM",
    topicsToRead: topicsByCourse["GST 111"],
    pastQuestions: null
  },
  {
    slug: "igb-107",
    courseCode: "IGB 107",
    courseTitle: "Basic Igbo",
    date: "2026-04-14",
    time: "Time not specified",
    topicsToRead: topicsByCourse["IGB 107"],
    pastQuestions: null
  }
];

export function getAllExams() {
  return [...examRecords].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return compareTime(a.time, b.time);
  });
}

export function getNextExam(referenceDate = new Date()) {
  const exams = getAllExams();
  return exams.find((exam) => getExamDateTime(exam) >= referenceDate) ?? exams[0];
}

export function getExamBySlug(slug: string) {
  return examRecords.find((exam) => exam.slug === slug) ?? null;
}

export function getExamsByDate(date: string) {
  return getAllExams().filter((exam) => exam.date === date);
}

export function getFinalExamDate() {
  return getAllExams().at(-1)?.date ?? examRecords[0]?.date ?? "";
}

export function formatDateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(parseExamDate(date));
}

export function formatWeekdayShort(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short"
  }).format(parseExamDate(date));
}

export function formatDayNumber(date: string) {
  return parseExamDate(date).getDate();
}

export function formatDayMonth(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric"
  }).format(parseExamDate(date));
}

export function parseExamDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function getExamDateTime(exam: Pick<ExamRecord, "date" | "time">) {
  const date = parseExamDate(exam.date);
  const startMinutes = toStartMinutes(exam.time);

  if (startMinutes === null) {
    date.setHours(23, 59, 0, 0);
    return date;
  }

  date.setHours(Math.floor(startMinutes / 60), startMinutes % 60, 0, 0);
  return date;
}

function compareTime(left: string, right: string) {
  const leftMinutes = toStartMinutes(left);
  const rightMinutes = toStartMinutes(right);

  if (leftMinutes === null && rightMinutes === null) return 0;
  if (leftMinutes === null) return 1;
  if (rightMinutes === null) return -1;
  return leftMinutes - rightMinutes;
}

function toStartMinutes(time: string) {
  if (/not specified/i.test(time)) return null;

  const normalized = time.replace("–", "-");
  const match = normalized.match(/(\d{1,2})\s*(?::(\d{2}))?\s*(AM|PM)/i);
  if (!match) return null;

  let hour = Number(match[1]);
  const minutes = Number(match[2] ?? "0");
  const meridian = match[3].toUpperCase();

  if (meridian === "PM" && hour !== 12) hour += 12;
  if (meridian === "AM" && hour === 12) hour = 0;

  return hour * 60 + minutes;
}
