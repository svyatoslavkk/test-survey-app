import type { RootState } from "../../store";

export const selectQuestions = (state: RootState) => state.survey.questions;
export const selectCurrentQuestionIndex = (state: RootState) =>
  state.survey.currentQuestionIndex;
export const selectCurrentQuestion = (state: RootState) =>
  state.survey.questions[state.survey.currentQuestionIndex];
export const selectAnswers = (state: RootState) => state.survey.answers;
export const selectIsLoading = (state: RootState) => state.survey.isLoading;
export const selectIsFinished = (state: RootState) => state.survey.isFinished;
export const selectTotalQuestions = (state: RootState) =>
  state.survey.questions.length;

export const selectCanProceed = (state: RootState) => {
  const currentQuestion = selectCurrentQuestion(state);
  if (!currentQuestion) return false;

  const answer = state.survey.answers[currentQuestion.id];

  if (currentQuestion.required) {
    if (currentQuestion.type === "radio") {
      return !!answer;
    } else {
      return Array.isArray(answer) && answer.length > 0;
    }
  }

  return true;
};
