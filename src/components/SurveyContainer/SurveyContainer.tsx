import ControlBlock from "../ControlBlock/ControlBlock";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import ShareButton from "../ShareButton/ShareButton";
import "./SurveyContainer.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  goToNextQuestion,
  initSurvey,
} from "@/lib/features/survey/surveySlice";
import {
  selectAnswers,
  selectCanProceed,
  selectCurrentQuestion,
  selectIsFinished,
  selectIsLoading,
} from "@/lib/features/survey/surveySelectors";

export const SurveyContainer = () => {
  const dispatch = useAppDispatch();

  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const isLoading = useAppSelector(selectIsLoading);
  const isFinished = useAppSelector(selectIsFinished);
  const answers = useAppSelector(selectAnswers);
  const canProceed = useAppSelector(selectCanProceed);
  const totalPages = useAppSelector((state) => state.survey.questions.length);
  const currentPage = useAppSelector(
    (state) => state.survey.currentQuestionIndex
  );

  useEffect(() => {
    dispatch(initSurvey());
  }, [dispatch]);

  const handleNext = () => {
    dispatch(goToNextQuestion());
  };

  const handleShareLink = () => {
    const surveyLink = window.location.href;
    navigator.clipboard
      .writeText(surveyLink)
      .then(() => {
        alert("Ссылка скопирована в буфер обмена!");
      })
      .catch((err) => {
        console.error("Не удалось скопировать ссылку: ", err);
      });
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isFinished) {
    console.log("Survey completed!", answers);
    return <div>Опрос завершен! Результаты в консоли.</div>;
  }

  const progress = (currentPage / (totalPages - 1)) * 100;

  const isAnswerSelected = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "checkbox") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  return (
    <div className="survey-container">
      <ShareButton onShareLink={handleShareLink} />
      <QuestionBlock
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id]}
      />
      <ControlBlock
        progress={progress}
        onNext={handleNext}
        isDisabled={!isAnswerSelected()}
        isLastQuestion={currentPage === totalPages - 1}
      />
    </div>
  );
};

export default SurveyContainer;
