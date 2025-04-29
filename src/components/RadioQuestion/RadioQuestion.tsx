import { Question } from "@/types";
import "./RadioQuestion.css";

interface RadioQuestionProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswerChange: (questionId: string, answer: string) => void;
}

export const RadioQuestion = ({
  question,
  selectedAnswer,
  onAnswerChange,
}: RadioQuestionProps) => {
  const handleOptionClick = (optionId: string) => {
    onAnswerChange(question.id, optionId);
  };

  return (
    <div className="question-options">
      <p className="question-type">Один ответ</p>

      <ul className="options-list">
        {question.options.map((option) => (
          <li
            key={option.id}
            className={`option-item ${
              selectedAnswer === option.id ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <label className="option-label">{option.text}</label>
            <div className="option-input">
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={selectedAnswer === option.id}
                onChange={() => {}}
                className="radio-input"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioQuestion;
