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
        "Question 5\n\nThe score of 35 students that took an assessment test on Law 121 is shown below:\n\n23, 36, 40, 28, 31, 39, 27, 44, 32,\n48, 37, 33, 30, 57, 38, 29, 24, 26,\n24, 38, 36, 23, 19, 42, 30, 50, 18, 22,\n32, 28, 34, 38, 35, 41, 27\n\na. Present the information in a Grouped Frequency Distribution Table.\n\nb. Discuss the Scales of Measurement known to you.",
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
    answerReveals: [
      {
        questionNumber: 1,
        question: "Discuss 3 components of prejudice and the nature of their manifestation.",
        answer:
          "The three components of prejudice are: Cognitive component — this is made up of stereotypes or beliefs about a group. It appears when people assume all members of a group share the same traits. Affective component — this refers to feelings or emotions toward a group, such as hatred, fear, dislike, or suspicion. Behavioural component — this is the action part and appears as discrimination, exclusion, verbal abuse, unfair treatment, or violence against members of the group."
      },
      {
        questionNumber: 2,
        question: "Discuss 2 types of ethnic identity.",
        answer:
          "Strong/positive ethnic identity — when a person is proud of their ethnic group, values its language, culture, and traditions, and sees belonging as important. Weak/negative ethnic identity — when a person feels detached, ashamed, confused, or indifferent about their ethnic group and may reject its customs or values."
      },
      {
        questionNumber: 3,
        question: "Explain 5 strategic ways of reducing ethnic conflicts in Nigeria.",
        answer:
          "Promotion of justice and fairness in appointments, allocation of resources, and political representation. Good governance to reduce marginalization and distrust. Inter-ethnic dialogue and peace education to build understanding and tolerance. Economic development and equal opportunities to reduce competition and resentment. Effective law enforcement so hate speech, violence, and discrimination are punished."
      },
      {
        questionNumber: 4,
        question: "With appropriate examples discuss 6 challenges to nation building in Nigeria.",
        answer:
          "Ethnic rivalry — groups often place ethnic loyalty above national unity. Religious intolerance — religious clashes weaken national integration. Corruption — public resources are diverted instead of used for development. Poor leadership — bad leadership creates instability and division. Marginalization and inequality — some groups feel excluded from power and development. Insecurity and violence — communal clashes, insurgency, and banditry weaken unity. Example: conflict over political appointments or resource control often creates tension among ethnic groups."
      },
      {
        questionNumber: 5,
        question: "With appropriate examples illustrate 4 manifestations of ethnic hatred in Nigeria.",
        answer:
          "Discrimination in employment or admissions based on ethnic origin. Hate speech and ethnic insults in politics and media. Communal clashes and violence between ethnic groups. Social exclusion or segregation where people refuse to associate, trade, or marry across groups. Example: refusing to rent a house or offer a job to someone because of their ethnic group."
      },
      {
        questionNumber: 6,
        question: "Discuss any 5 ways in which xenophobia can be reduced.",
        answer:
          "Public education and awareness against fear of foreigners. Promotion of tolerance and multicultural values. Fair immigration policies that balance security with human dignity. Economic inclusion so foreigners are not seen only as threats. Dialogue and social integration programmes between locals and migrants."
      }
    ],
    topicKeyPoints: [
      {
        topic: "ETHNICITY MEANING, APPROACH, CHARACTERISTICS AND STAGES",
        points: [
          "Ethnicity refers to a sense of belonging based on common language, ancestry, culture, religion, or history.",
          "It is a social identity that shapes group loyalty and behaviour.",
          "Characteristics: common origin, shared culture, group consciousness, and distinct identity.",
          "Stages may move from ethnic awareness to ethnic solidarity, competition, and sometimes conflict."
        ]
      },
      {
        topic: "Meaning of ethnic group",
        points: [
          "An ethnic group is a group of people who share common ancestry, traditions, language, and cultural values.",
          "Members see themselves as distinct from others."
        ]
      },
      {
        topic: "Types of Ethnic group",
        points: [
          "Majority ethnic groups",
          "Minority ethnic groups",
          "Indigenous/native groups",
          "Migrant/settler ethnic groups"
        ]
      },
      {
        topic: "Ethnic conflict, causes, solution to ethnic conflict",
        points: [
          "Causes: competition for resources, marginalization, bad leadership, prejudice, political manipulation.",
          "Solutions: dialogue, justice, inclusive governance, peace education, balanced development."
        ]
      },
      {
        topic: "PREJUDICES AND STEREOTYPE",
        points: [
          "Prejudice is a negative attitude toward a group.",
          "Stereotype is a fixed generalized belief about a group.",
          "Prejudice often produces discrimination."
        ]
      },
      {
        topic: "Types of prejudices",
        points: [
          "Ethnic prejudice",
          "Religious prejudice",
          "Gender prejudice",
          "Class prejudice",
          "Racial prejudice"
        ]
      },
      {
        topic: "Component of prejudice",
        points: ["Cognitive", "Affective", "Behavioural"]
      },
      {
        topic: "Ways of reducing prejudices",
        points: [
          "Education",
          "Intergroup contact",
          "Equal opportunities",
          "Fair laws",
          "Positive media representation"
        ]
      },
      {
        topic: "Stereotypes - meaning, approaches, and strategies in reducing stereotypes",
        points: [
          "Meaning: overgeneralized belief about a group.",
          "Reduction: exposure, critical thinking, education, interaction, and fair representation."
        ]
      },
      {
        topic: "NATION BUILDING AND NATIONALISM",
        points: [
          "Nation building means creating unity, loyalty, and development in a state.",
          "Nationalism is devotion to one’s nation above sectional loyalties."
        ]
      },
      {
        topic: "Basic factors to nation building",
        points: [
          "Justice",
          "Good leadership",
          "Security",
          "Equal opportunity",
          "Shared national identity"
        ]
      },
      {
        topic: "Condition and challenges to nation building",
        points: [
          "Conditions: peace, fairness, strong institutions, participation.",
          "Challenges: corruption, ethnic crisis, inequality, insecurity, poor governance."
        ]
      },
      {
        topic: "Nationalism and goals of nationalism",
        points: ["Goals: unity, sovereignty, pride, collective progress, self-determination."]
      },
      {
        topic: "ETHNIC CRISES",
        points: [
          "Ethnic crises are violent or tense confrontations between ethnic groups.",
          "Often caused by competition, prejudice, land disputes, or political manipulation."
        ]
      }
    ],
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
    answerReveals: [
      {
        questionNumber: "1(a)",
        question: "As a psychologist, enumerate five factors that promote motivation in sports.",
        answer:
          "Goal setting. Rewards and recognition. Positive coaching and encouragement. Self-confidence and belief in success. Good team spirit and social support."
      },
      {
        questionNumber: "1(b)",
        question:
          "There are many factors directly involved in sports performance ranging from psychological factors to physical characteristics. Discuss the roles of sports psychologist in sports performance.",
        answer:
          "A sports psychologist helps athletes improve motivation, confidence, concentration, emotional control, stress management, and team cohesion. They teach mental skills such as goal setting, relaxation, imagery, self-talk, and coping strategies. They also help injured athletes recover psychologically and help coaches understand athletes’ mental needs."
      },
      {
        questionNumber: "2(a)",
        question:
          "Identify five techniques that enhance athlete’s performance in sports competition.",
        answer:
          "Goal setting. Mental imagery/visualization. Relaxation techniques. Positive self-talk. Concentration and attention control training."
      },
      {
        questionNumber: "2(b)",
        question: "List five objectives of sport coaching.",
        answer:
          "Skill development. Physical fitness improvement. Discipline and sportsmanship. Team coordination. Performance improvement and achievement of goals."
      },
      {
        questionNumber: "2(c)",
        question: "Discuss the relevance of sports psychology in the world of sports.",
        answer:
          "Sports psychology helps athletes perform better by improving mental readiness, motivation, confidence, and emotional control. It helps reduce anxiety, manage pressure, improve focus, and build team spirit. It is relevant because success in sports depends on both physical and psychological preparation."
      },
      {
        questionNumber: "3(a)",
        question: "Discuss five sources of emotions in sports settings known to you.",
        answer:
          "Competition pressure. Fear of failure. Crowd reaction. Coaching style and criticism. Injury or threat of injury."
      },
      {
        questionNumber: "3(b)",
        question: "Enumerate the importance of coaching in sports.",
        answer:
          "Improves skills. Builds discipline. Boosts confidence. Guides tactics and strategy. Promotes teamwork and motivation."
      },
      {
        questionNumber: 4,
        question: "Identify the 4 C’s and discuss their importance in sports performance.",
        answer:
          "The 4 C’s are: Confidence — belief in one’s ability to succeed. Control — ability to manage emotions and reactions. Commitment — determination to keep working toward goals. Concentration — ability to focus attention on the task. They are important because they improve consistency, mental toughness, and performance under pressure."
      },
      {
        questionNumber: 5,
        question:
          "Identify 5 effective strategies used by therapists to treat competition anxiety.",
        answer:
          "Relaxation training. Cognitive restructuring. Deep breathing exercises. Mental imagery. Positive self-talk."
      },
      {
        questionNumber: "6(a)",
        question:
          "As a sport psychologist, identify ways anxiety can manifest among sports men and women and discuss only two forms identified.",
        answer:
          "Anxiety can manifest as cognitive anxiety, somatic/physical anxiety, and behavioural signs. Cognitive anxiety includes fear, worry, negative thoughts, and poor concentration. Somatic anxiety includes sweating, trembling, rapid heartbeat, dry mouth, and muscle tension."
      },
      {
        questionNumber: "6(b)",
        question: "Enumerate three main causes of anxiety.",
        answer:
          "Fear of failure. High expectations from self, coach, or fans. Lack of preparation or uncertainty."
      },
      {
        questionNumber: "6(c)",
        question:
          "Briefly discuss two psychological strategies to reduce pre-performance anxiety and enhance optimum performance.",
        answer:
          "Relaxation training helps reduce physical tension and calm the body before competition. Positive self-talk helps replace fear and doubt with confidence and focus."
      }
    ],
    topicKeyPoints: [
      {
        topic: "Meaning of sports psychology",
        points: [
          "Sports psychology is the study of how psychological factors affect sports performance and how participation in sport affects the mind."
        ]
      },
      {
        topic: "Relevance and Aims of sports psychology",
        points: [
          "Improve performance",
          "Increase motivation",
          "Reduce anxiety",
          "Build confidence",
          "Improve team spirit and adjustment"
        ]
      },
      {
        topic: "EMOTIONS",
        points: [
          "Emotions influence performance positively or negatively.",
          "Examples: excitement, anger, fear, joy, frustration."
        ]
      },
      {
        topic: "Roles and Sources of Emotions in athlete sport settings",
        points: [
          "Sources: crowd, pressure, coach, injury, opponent, expectations.",
          "Emotions can energize or disrupt performance."
        ]
      },
      {
        topic: "MOTIVATION",
        points: ["Motivation is the force that drives an athlete to participate and persist."]
      },
      {
        topic: "Types of motivation",
        points: ["Intrinsic motivation", "Extrinsic motivation"]
      },
      {
        topic: "ANXIETY",
        points: ["Anxiety is a state of fear, tension, or worry before or during competition."]
      },
      {
        topic: "Causes, Effects/signs/Symptoms of Anxiety in sports",
        points: [
          "Causes: fear of failure, pressure, poor preparation",
          "Signs: sweating, trembling, rapid heartbeat, poor focus"
        ]
      },
      {
        topic: "Manifestation of Anxiety in sports settings",
        points: ["Cognitive", "Somatic", "Behavioural"]
      },
      {
        topic: "Treatment approaches to anxiety",
        points: [
          "Relaxation",
          "Self-talk",
          "Imagery",
          "Breathing control",
          "Cognitive therapy"
        ]
      }
    ],
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
    answerReveals: [
      {
        questionNumber: "1(a)",
        question: "What do you understand by humanitarian services and social services?",
        answer:
          "Humanitarian services are services aimed at relieving suffering and protecting human welfare during hardship, crisis, or need. Social services are organized services provided to improve the welfare and quality of life of individuals and communities, such as health, education, housing, and counselling."
      },
      {
        questionNumber: "1(b)",
        question:
          "In the light of (1a) above, discuss the essence of traditional social welfare in Africa.",
        answer:
          "Traditional social welfare in Africa is based on communal support, kinship, and collective responsibility. Its essence lies in helping the poor, sick, aged, widows, orphans, and other vulnerable persons through family and community networks. It promotes solidarity, mutual aid, belongingness, and social stability."
      },
      {
        questionNumber: "2(a)",
        question: "Outline at least two of these socio-economic problems.",
        answer:
          "Poverty. Unemployment. Other acceptable examples: poor housing, crime, drug abuse, poor sanitation."
      },
      {
        questionNumber: "2(b)",
        question:
          "Briefly discuss them indicating also their causes, effects and possible solutions.",
        answer:
          "Poverty is caused by unemployment, poor governance, and low income. It leads to crime, poor health, and low standard of living. Solutions include job creation, empowerment, and social support. Unemployment is caused by weak economy, lack of skills, and population growth. It leads to frustration, dependency, and crime. Solutions include vocational training, entrepreneurship, and industrial development."
      },
      {
        questionNumber: "3(a)",
        question: "State at least three major goals of community psychology.",
        answer:
          "Prevention of social and mental health problems. Promotion of well-being and empowerment. Community participation and social change."
      },
      {
        questionNumber: "3(b)",
        question:
          "With relevant illustrations state and explain three major preventive programmes that community psychologists can embark on.",
        answer:
          "Health education programmes — to prevent disease and unhealthy behaviour. Drug abuse prevention programmes — to reduce substance misuse. School/community counselling and awareness programmes — to prevent emotional, behavioural, and social problems."
      },
      {
        questionNumber: "3(c)",
        question:
          "Outline three criteria that a programme must meet to be considered a primary preventive programme.",
        answer:
          "It targets a whole population or at-risk group before the problem occurs. It aims at prevention rather than treatment. It promotes healthy functioning and resilience."
      },
      {
        questionNumber: "4(a)",
        question: "Vividly explain comprehensively the course “Community Psychology”.",
        answer:
          "Community psychology is a branch of psychology concerned with the relationship between individuals and their social environments. It focuses on prevention, empowerment, social justice, and solving community problems through research, intervention, and participation rather than waiting to treat problems after they arise."
      },
      {
        questionNumber: "4(b)",
        question: "Enumerate with at least three points the essence of the course.",
        answer:
          "It promotes prevention rather than cure. It empowers communities to solve problems. It encourages social justice and improved welfare."
      },
      {
        questionNumber: 5,
        question: "List and explain three methods of data collection.",
        answer:
          "Observation — watching behaviour or events directly. Interview — asking respondents questions directly. Questionnaire — collecting written responses from participants."
      },
      {
        questionNumber: 6,
        question:
          "As a would-be adviser in a government parastatal or private agency that has the well-being of citizens in mind, x-ray at least three research methods that a community psychologist can master in order to do a satisfactory work.",
        answer:
          "Survey method — useful for collecting data from many people. Case study method — useful for detailed study of individuals or communities. Participant observation/field study — useful for understanding real community life and behaviour."
      }
    ],
    topicKeyPoints: [
      {
        topic: "INTRODUCTION TO COMMUNITY PSYCHOLOGY",
        points: [
          "Focuses on people in their environment.",
          "Emphasizes prevention, empowerment, and community participation."
        ]
      },
      {
        topic: "History, Systems and Goals of community psychology",
        points: [
          "Emerged as a response to limits of individual treatment alone.",
          "Goals: prevention, empowerment, justice, and social welfare."
        ]
      },
      {
        topic: "Research methods in community psychology",
        points: [
          "Observation",
          "Interview",
          "Questionnaire",
          "Survey",
          "Case study",
          "Field research"
        ]
      },
      {
        topic: "Socio-cultural factors in psychopathology",
        points: ["Poverty", "stigma", "family breakdown", "cultural beliefs", "social exclusion"]
      },
      {
        topic: "Community humanitarian and social services",
        points: [
          "welfare support",
          "relief services",
          "counselling",
          "health outreach",
          "support for vulnerable groups"
        ]
      }
    ],
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
    answerReveals: [
      {
        questionNumber: "1(a)",
        question: "What is pathology?",
        answer:
          "Pathology is the study of diseases, their causes, processes, development, and effects on living organisms."
      },
      {
        questionNumber: "1(b)",
        question: "What is Klinefelter syndrome?",
        answer:
          "Klinefelter syndrome is a chromosomal disorder in which a male has an extra X chromosome, usually written as XXY."
      },
      {
        questionNumber: "1(c)",
        question: "State 4 types of chromosome mutation.",
        answer: "Deletion. Duplication. Inversion. Translocation."
      },
      {
        questionNumber: "2(a)",
        question: "Give an example of an organism that is: Acellular • Bilaterally symmetrical",
        answer: "Acellular: Virus. Bilaterally symmetrical: Earthworm or flatworm."
      },
      {
        questionNumber: "2(b)",
        question: "Describe the characteristics of Platyhelminthes.",
        answer:
          "They are flat-bodied, bilaterally symmetrical, triploblastic, unsegmented, and many are parasitic. They have no true coelom and possess simple organ systems."
      },
      {
        questionNumber: "2(c)",
        question: "Name a disease associated with Platyhelminthes.",
        answer: "Tapeworm infection or schistosomiasis."
      },
      {
        questionNumber: "3(a)",
        question: "Mention any 4 biological factors that determine ecological distribution.",
        answer: "Food availability. Predators. Competition. Disease/parasites."
      },
      {
        questionNumber: "3(b)",
        question: "Distinguish between commensalism and parasitism.",
        answer:
          "In commensalism, one organism benefits while the other is neither harmed nor helped. In parasitism, one organism benefits while the host is harmed."
      },
      {
        questionNumber: 4,
        question: "Draw and label a typical plant cell showing 10–15 parts.",
        answer:
          "Key parts to label: Cell wall, cell membrane, cytoplasm, nucleus, nucleolus, chloroplast, vacuole, mitochondrion, ribosome, rough endoplasmic reticulum, smooth endoplasmic reticulum, Golgi apparatus, plasmodesmata, tonoplast, nuclear membrane."
      },
      {
        questionNumber: "5(a)",
        question: "Outline the five kingdoms of living organisms.",
        answer: "Monera. Protista. Fungi. Plantae. Animalia."
      },
      {
        questionNumber: "5(b)",
        question: "Briefly discuss the kingdoms living organisms are classified into.",
        answer:
          "Monera — simple prokaryotes like bacteria. Protista — mostly unicellular eukaryotes like amoeba. Fungi — non-photosynthetic organisms like mushrooms. Plantae — multicellular photosynthetic organisms. Animalia — multicellular organisms that feed on other organisms."
      },
      {
        questionNumber: 6,
        question:
          "Define the following terms: Allele • Gene locus • Dominant and recessive gene • State the two laws of Mendel • State the three Mendelian gene genotypes",
        answer:
          "Allele — an alternative form of a gene. Gene locus — the specific position of a gene on a chromosome. Dominant gene — a gene expressed even in a heterozygous state. Recessive gene — a gene expressed only when paired with another recessive gene. Two laws of Mendel — law of segregation and law of independent assortment. Three Mendelian genotypes — homozygous dominant, heterozygous, homozygous recessive."
      }
    ],
    topicKeyPoints: [
      {
        topic: "CELL STRUCTURE AND ORGANISMS",
        points: ["Cell is the basic unit of life.", "Organisms may be unicellular or multicellular."]
      },
      {
        topic: "Functions of the Cell",
        points: ["metabolism", "reproduction", "respiration", "excretion", "growth"]
      },
      {
        topic: "LIVING ORGANISMS AND THEIR GENERAL REPRODUCTION",
        points: [
          "reproduction may be sexual or asexual",
          "it ensures continuity of species"
        ]
      },
      {
        topic: "INTERRELATIONSHIP OR ASSOCIATION BETWEEN ORGANISMS",
        points: ["mutualism", "commensalism", "parasitism", "competition", "predation"]
      },
      {
        topic: "HEREDITARY AND EVOLUTION",
        points: [
          "heredity explains transmission of traits",
          "evolution explains gradual change over time"
        ]
      },
      {
        topic: "Habitat, characteristics and life - ECOLOGY",
        points: [
          "ecology studies organisms and environment",
          "habitat is the natural home of an organism"
        ]
      }
    ],
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
    answerReveals: [
      {
        questionNumber: 1,
        question:
          "Outline and explain in detail Comte’s three stages of intellectual development.",
        answer:
          "Comte said human thought passes through three stages: Theological stage — people explain events by supernatural or divine forces. Metaphysical stage — explanations shift from gods to abstract ideas or philosophies. Positive/scientific stage — people rely on observation, evidence, and scientific reasoning."
      },
      {
        questionNumber: 2,
        question: "According to Comte, Sociology consists of two branches. Discuss.",
        answer:
          "The two branches are: Social statics — study of social order, structure, and stability. Social dynamics — study of social change, progress, and development. Social statics explains how society is held together, while social dynamics explains how society changes over time."
      },
      {
        questionNumber: "3(a)",
        question: "Define Sociology.",
        answer:
          "Sociology is the scientific study of society, social relationships, institutions, and human social behaviour."
      },
      {
        questionNumber: "3(b)",
        question:
          "Historically, the events that led to the development of sociology may be classified into three parts. Amplify.",
        answer:
          "They include: The Industrial Revolution — changed work, family life, and urban living. The French Revolution — challenged old political and social systems. The growth of scientific thinking/Enlightenment — encouraged the use of reason and evidence in understanding society."
      },
      {
        questionNumber: 4,
        question:
          "Explain the relationship between sociology and the following: Economics (b) Political Science (c) History",
        answer:
          "Economics studies production, distribution, and consumption, while sociology studies how economic life affects people and institutions. Political Science studies government and power, while sociology examines how power and institutions affect society. History studies past events, while sociology helps explain patterns and social forces behind those events."
      },
      {
        questionNumber: "5(a)",
        question: "What is culture?",
        answer:
          "Culture is the total way of life of a people, including their beliefs, values, customs, language, norms, and material objects."
      },
      {
        questionNumber: "5(b)",
        question: "Discuss any three types of culture known to you.",
        answer:
          "Material culture — physical objects like tools, clothes, buildings. Non-material culture — values, beliefs, norms, and language. Ideal culture — what people claim to value or practice; real culture is what they actually do."
      },
      {
        questionNumber: "6(a)",
        question: "Define Social Control.",
        answer:
          "Social control refers to the ways society regulates behaviour and ensures conformity to norms and values."
      },
      {
        questionNumber: "6(b)",
        question: "Mention and explain the five functions of social control.",
        answer:
          "Maintains order — keeps society stable. Promotes conformity — encourages obedience to norms. Prevents deviance — discourages harmful behaviour. Protects values — preserves culture and morality. Ensures social integration — helps members live together peacefully."
      }
    ],
    topicKeyPoints: [
      {
        topic: "DEFINITION OF SOCIOLOGY",
        points: [
          "Sociology studies society scientifically.",
          "It focuses on institutions, relationships, and behaviour."
        ]
      },
      {
        topic: "RELATIONSHIP BETWEEN SOCIOLOGY AND OTHER SOCIAL SCIENCES",
        points: [
          "Linked with economics, political science, anthropology, psychology, history."
        ]
      },
      {
        topic: "THE SCIENTIFIC NATURE OF SOCIOLOGY",
        points: ["Uses observation, evidence, objectivity, and research methods."]
      },
      {
        topic: "METHOD OF SOCIAL RESEARCH",
        points: ["observation", "interview", "questionnaire", "survey", "experiment", "case study"]
      },
      {
        topic: "AIMS  AND SCOPE OF SOCIAL RESEARCH",
        points: [
          "understand society",
          "solve social problems",
          "explain behaviour",
          "guide planning and policy"
        ]
      }
    ],
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
    answerReveals: [
      {
        questionNumber: "1(A)",
        question: "Define ethics and morality, highlighting three key distinctions.",
        answer:
          "Ethics refers to formal principles and standards that guide professional conduct. Morality refers to personal beliefs about right and wrong. Three distinctions: Ethics is professional and formal, morality is personal and informal. Ethics is often written in codes, morality is shaped by upbringing, religion, and culture. Ethics applies to professional duties, morality applies to everyday individual conduct."
      },
      {
        questionNumber: "1(B)",
        question:
          "Explain four ethical principles involved in the treatment of non-human subjects in psychological research.",
        answer:
          "Humane treatment — animals should not be subjected to unnecessary pain. Minimization of harm — researchers should reduce suffering as much as possible. Proper care and housing — animals must be adequately fed and protected. Scientific justification — animal use must be necessary and not done carelessly."
      },
      {
        questionNumber: "2(A)",
        question:
          "List and explain three reasons why ethics is essential in psychological practice.",
        answer:
          "Protects clients and participants from harm. Maintains professional standards and trust. Guides psychologists in difficult decisions and responsible conduct."
      },
      {
        questionNumber: "2(B)",
        question:
          "Identify and describe three consequences of unethical conduct in psychology.",
        answer:
          "Loss of trust and credibility. Harm to clients, participants, or the public. Professional sanctions such as suspension, dismissal, or legal action."
      },
      {
        questionNumber: "3(A)",
        question:
          "Briefly discuss how a Nigerian psychologist should handle a client who confesses intent to harm another.",
        answer:
          "The psychologist should assess the seriousness of the threat, maintain professionalism, take steps to protect the potential victim, and break confidentiality if necessary to prevent harm, in line with ethical and legal obligations."
      },
      {
        questionNumber: "3(B)",
        question: "Outline three consequences of violating professional boundaries.",
        answer:
          "Loss of objectivity. Emotional or psychological harm to the client. Disciplinary action against the psychologist."
      },
      {
        questionNumber: "4(A)",
        question:
          "Identify and explain three unethical research practices and their consequences using Nigerian research contexts.",
        answer:
          "Fabrication or falsification of data — produces false findings and damages trust. Lack of informed consent — violates participant rights. Plagiarism — steals intellectual work and harms professional integrity."
      },
      {
        questionNumber: "4(B)",
        question:
          "Briefly discuss three ways professionals in Nigeria can demonstrate integrity in ethical dilemmas.",
        answer:
          "Honesty in decision-making and reporting. Respect for professional codes and standards. Consultation and accountability when faced with difficult choices."
      },
      {
        questionNumber: 5,
        question:
          "What ethical codes are violated when a psychologist discloses client information to a friend?",
        answer:
          "The psychologist violates confidentiality, privacy, trust, professional responsibility, and respect for client dignity."
      },
      {
        questionNumber: "6(A)",
        question: "Explain two challenges psychologists face in maintaining boundaries with clients.",
        answer:
          "Dual relationships — when personal and professional roles overlap. Emotional attachment or over-involvement — which can affect judgment and objectivity."
      },
      {
        questionNumber: "6(B)",
        question:
          "Briefly explain one importance of whistleblowing policy in Nigerian psychological practice.",
        answer:
          "A whistleblowing policy is important because it helps expose unethical conduct, protects clients and institutions, and promotes accountability in professional practice."
      }
    ],
    topicKeyPoints: [
      {
        topic: "UNDERSTANDING THE HUMAN MIND AND BEHAVIOR: THE PHILOSOPHICAL PERSPECTIVE",
        points: [
          "Human behaviour can be examined through reason, values, and reflection.",
          "Philosophy laid the foundation for psychology."
        ]
      },
      {
        topic: "ETHICS - INTRODUCTION TO ETHICS IN PSYCHOLOGY",
        points: [
          "Ethics guides professional behaviour.",
          "It protects clients, participants, and the integrity of the profession."
        ]
      },
      {
        topic: "ETHICAL THEORIES",
        points: ["Utilitarianism", "Deontology", "Virtue ethics"]
      },
      {
        topic: "ETHICS IN SCIENTIFIC RESEARCH",
        points: [
          "informed consent",
          "confidentiality",
          "protection from harm",
          "honesty in reporting"
        ]
      },
      {
        topic: "REDRESSING UNETHICAL BEHAVIOR",
        points: ["reporting misconduct", "sanctions", "review boards", "accountability systems"]
      },
      {
        topic: "LOBBYING IN PROMOTING PSYCHOLOGY IN PUBLIC SPACE",
        points: [
          "creating awareness",
          "advocating for mental health",
          "promoting psychology in policy and society"
        ]
      },
      {
        topic: "INTEGRITY IN PSYCHOLOGICAL PRACTICE",
        points: ["honesty", "responsibility", "confidentiality", "fairness"]
      },
      {
        topic: "EMOTIONAL INTELLIGENCE",
        points: ["ability to understand and manage emotions in self and others"]
      },
      {
        topic: "INATTENTIONAL BLINDNESS OR INATTENTIONAL AMNESIA",
        points: ["failure to notice or retain information because attention was elsewhere"]
      },
      {
        topic: "UNDERSTANDING HUMAN MEMORY",
        points: ["encoding", "storage", "retrieval", "forgetting"]
      }
    ],
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

export function isUpcomingExam(
  exam: Pick<ExamRecord, "date" | "time">,
  referenceDate = new Date()
) {
  return getExamDateTime(exam).getTime() >= referenceDate.getTime();
}

export function isCompletedExam(
  exam: Pick<ExamRecord, "date" | "time">,
  referenceDate = new Date()
) {
  return !isUpcomingExam(exam, referenceDate);
}

export function getUpcomingExams(referenceDate = new Date()) {
  return getAllExams().filter((exam) => isUpcomingExam(exam, referenceDate));
}

export function getNextExam(referenceDate = new Date()): ExamRecord | null {
  return getUpcomingExams(referenceDate)[0] ?? null;
}

export function getExamsLeft(referenceDate = new Date()) {
  return getUpcomingExams(referenceDate).length;
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
