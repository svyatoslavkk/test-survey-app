import type React from "react";
import "./ResultsContainer.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { resetSurvey } from "@/lib/features/survey/surveySlice";
import { ResultAnswer } from "../ResultAnswer";
import {
  selectAnswers,
  selectQuestions,
} from "@/lib/features/survey/surveySelectors";

const ResultsContainer: React.FC = () => {
  const answers = useAppSelector(selectAnswers);
  const questions = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();

  const handleRestart = () => {
    dispatch(resetSurvey());
  };

  return (
    <div className="results-container">
      <h1 className="results-title">Результаты опроса</h1>

      <div className="results-list">
        {questions.map((question, index) => (
          <div key={question.id} className="result-item">
            <h2 className="result-question">
              {index + 1}. {question.title}
            </h2>
            <div className="result-answer">
              <span className="answer-label">
                {question.type === "radio" ? "Ваш ответ:" : "Ваши ответы:"}
              </span>{" "}
              <ResultAnswer question={question} answer={answers[question.id]} />
            </div>
          </div>
        ))}
      </div>

      <div className="restart-button-container">
        <button className="restart-button" onClick={handleRestart}>
          Пройти опрос заново
        </button>
      </div>
    </div>
  );
};

export default ResultsContainer;
