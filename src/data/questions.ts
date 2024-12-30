export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: "BA" | "PM";
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary role of a Business Analyst?",
    options: [
      "Writing code for applications",
      "Bridging the gap between business needs and technical solutions",
      "Managing project budgets",
      "Hiring new team members",
    ],
    correctAnswer: 1,
    explanation:
      "A Business Analyst primarily acts as a bridge between business stakeholders and technical teams, translating business needs into technical requirements.",
    category: "BA",
    difficulty: "beginner",
  },
  {
    id: 2,
    question: "Which project management methodology is iterative and incremental?",
    options: ["Waterfall", "Agile", "Traditional", "Linear"],
    correctAnswer: 1,
    explanation:
      "Agile is an iterative and incremental approach to project management that emphasizes flexibility, continuous improvement, and rapid delivery.",
    category: "PM",
    difficulty: "beginner",
  },
  {
    id: 3,
    question: "What is a user story in Agile methodology?",
    options: [
      "A long technical document",
      "A bug report",
      "A description of functionality from the user's perspective",
      "A project timeline",
    ],
    correctAnswer: 2,
    explanation:
      "A user story is a simple description of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system.",
    category: "BA",
    difficulty: "beginner",
  },
];