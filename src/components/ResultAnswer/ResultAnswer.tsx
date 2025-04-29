import { SKIPPED_ANSWER } from "@/lib/constants";
import { Question } from "@/lib/features/survey/types";

interface AnswerProps {
  question: Question;
  answer: string | string[];
}

export const ResultAnswer: React.FC<AnswerProps> = ({ question, answer }) => {
  const isDontKnow =
    answer === SKIPPED_ANSWER ||
    (Array.isArray(answer) && answer.includes(SKIPPED_ANSWER));

  if (isDontKnow) {
    return <span>Затрудняюсь ответить</span>;
  }

  if (question.type === "radio") {
    const selectedOption = question.options.find((opt) => opt.id === answer);
    return <span>{selectedOption?.text || "Не выбрано"}</span>;
  }

  if (Array.isArray(answer) && answer.length > 0) {
    return (
      <ul className="answer-list">
        {answer.map((answerId) => {
          const selectedOption = question.options.find(
            (opt) => opt.id === answerId
          );
          return <li key={answerId}>{selectedOption?.text || "Не выбрано"}</li>;
        })}
      </ul>
    );
  }

  return <span>Не выбрано</span>;
};
