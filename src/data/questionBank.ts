export interface Question {
  id: string;
  category: string;
  subcategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questionBank: Record<string, Question[]> = {
  'role-specific': [
    {
      id: 'rs1',
      category: 'role-specific',
      subcategory: 'Business Analysis Fundamentals',
      difficulty: 'beginner',
      question: 'What is the primary purpose of requirements gathering?',
      options: [
        'To create technical documentation',
        'To understand stakeholder needs and project objectives',
        'To design the user interface',
        'To write code'
      ],
      correctAnswer: 1,
      explanation: 'Requirements gathering is primarily focused on understanding stakeholder needs and project objectives to ensure the solution meets business goals.'
    },
    // Add more questions here
  ],
  'methodologies': [
    {
      id: 'mt1',
      category: 'methodologies',
      subcategory: 'Agile Methodologies',
      difficulty: 'beginner',
      question: 'What is a Sprint in Agile methodology?',
      options: [
        'A quick meeting',
        'A fixed time period for completing work',
        'A type of documentation',
        'A testing phase'
      ],
      correctAnswer: 1,
      explanation: 'A Sprint is a fixed time period (usually 2-4 weeks) during which specific work has to be completed and made ready for review.'
    },
    // Add more questions here
  ]
};