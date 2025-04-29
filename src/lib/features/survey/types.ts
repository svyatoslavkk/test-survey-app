export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  index: number;
  subIndex: number;
  number: string;
  title: string;
  type: "radio" | "checkbox";
  options: Option[];
  shareLink?: boolean;
  required?: boolean;
}

export interface SurveyState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, string | string[]>;
  isLoading: boolean;
  isFinished: boolean;
}

export type Answer = string | string[];
