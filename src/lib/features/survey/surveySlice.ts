import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SurveyState, Answer } from "./types";
import { mockQuestions } from "./questions.mock";
import { SKIPPED_ANSWER } from "@/lib/constants";

const initialState: SurveyState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  isLoading: true,
  isFinished: false,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    initSurvey: (state) => {
      state.questions = mockQuestions;
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.isLoading = false;
      state.isFinished = false;
    },
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answer: Answer }>
    ) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    resetSurvey: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.isFinished = false;
    },
    skipQuestion: (state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (currentQuestion) {
        state.answers[currentQuestion.id] = SKIPPED_ANSWER;
      }
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
  },
});

export const {
  initSurvey,
  setAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  resetSurvey,
  skipQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
