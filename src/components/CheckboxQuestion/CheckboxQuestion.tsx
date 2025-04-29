import { Question } from "@/types";
import "./CheckboxQuestion.css";

interface CheckboxQuestionProps {
  question: Question;
  selectedAnswers: string[];
  onAnswerChange: (questionId: string, answer: string[]) => void;
}

export const CheckboxQuestion = ({
  question,
  selectedAnswers,
  onAnswerChange,
}: CheckboxQuestionProps) => {
  const handleOptionClick = (optionId: string) => {
    if (optionId === "dontknow") {
      onAnswerChange(question.id, ["dontknow"]);
      return;
    }

    let newSelectedAnswers = [...selectedAnswers];
    if (newSelectedAnswers.includes("dontknow")) {
      newSelectedAnswers = newSelectedAnswers.filter((id) => id !== "dontknow");
    }

    if (newSelectedAnswers.includes(optionId)) {
      newSelectedAnswers = newSelectedAnswers.filter((id) => id !== optionId);
    } else {
      newSelectedAnswers.push(optionId);
    }

    onAnswerChange(question.id, newSelectedAnswers);
  };

  return (
    <div className="question-options">
      <p className="question-type">Несколько ответов</p>

      <ul className="options-list">
        {question.options.map((option) => (
          <li
            key={option.id}
            className={`option-item ${
              selectedAnswers.includes(option.id) ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <label className="option-label">{option.text}</label>
            <div className="option-input">
              <input
                type="checkbox"
                value={option.id}
                checked={selectedAnswers.includes(option.id)}
                onChange={() => {}}
                className="checkbox-input"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxQuestion;
