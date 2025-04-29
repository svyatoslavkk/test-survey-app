import CheckboxQuestion from "../CheckboxQuestion/CheckboxQuestion";
import DontKnowButton from "../DontKnowButton/DontKnowButton";
import RadioQuestion from "../RadioQuestion/RadioQuestion";
import { Question } from "@/types";
import "./QuestionBlock.css";
import { useAppDispatch } from "@/lib/hooks";
import { setAnswer } from "@/lib/features/survey/surveySlice";

interface QuestionBlockProps {
  question: Question;
  selectedAnswer: string | string[] | undefined;
}

export const QuestionBlock = ({
  question,
  selectedAnswer,
}: QuestionBlockProps) => {
  const dispatch = useAppDispatch();
  const handleAnswerChange = (
    questionId: string,
    answer: string | string[]
  ) => {
    dispatch(setAnswer({ questionId, answer }));
  };

  const handleDontKnow = () => {
    if (question.type === "radio") {
      handleAnswerChange(question.id, "dontknow");
    } else {
      handleAnswerChange(question.id, ["dontknow"]);
    }
  };

  return (
    <div className="question-block">
      <h2 className="question-title">
        {question.number}. {question.title}
      </h2>

      {question.type === "radio" ? (
        <RadioQuestion
          question={question}
          selectedAnswer={selectedAnswer as string}
          onAnswerChange={handleAnswerChange}
        />
      ) : (
        <CheckboxQuestion
          question={question}
          selectedAnswers={(selectedAnswer as string[]) || []}
          onAnswerChange={handleAnswerChange}
        />
      )}

      <DontKnowButton onClick={handleDontKnow} />
    </div>
  );
};

export default QuestionBlock;
