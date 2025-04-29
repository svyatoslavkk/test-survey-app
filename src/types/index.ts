export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  number: string;
  title: string;
  type: "radio" | "checkbox";
  options: Option[];
}
