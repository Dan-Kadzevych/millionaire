import createReducer from 'utils/redux/createReducer';
import { sortByOrder } from 'utils/helpers';
import {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  SET_ANSWER_ID,
  SET_ACTIVE_QUESTION_ID,
  SET_IS_QUESTION_RESULT_VISIBLE,
  SET_SCORE,
} from './types';

const initialState = {
  isLoading: true,
  questions: {
    byId: {},
    allIds: {},
  },
  answers: {
    byId: {},
    allIds: {},
  },
  activeQuestionId: undefined,
  selectedAnswerId: undefined,
  isQuestionResultVisible: false,
  score: undefined,
};

function resetGameState() {
  return initialState;
}

function finishLoading(state = initialState) {
  return { ...state, isLoading: false };
}

function startLoading(state = initialState) {
  return { ...state, isLoading: true };
}

function initializeGameSuccess(
  state = initialState,
  {
    payload: {
      data: {
        entities: { questions: questionsById, answers: answersById },
        result: { questions: questionIds, answers: answerIds },
      },
    },
  },
) {
  const firstQuestion = questionIds
    .map((id) => questionsById[id])
    .sort(sortByOrder)[0];

  return {
    ...state,
    isLoading: false,
    questions: { byId: questionsById, allIds: questionIds },
    answers: { byId: answersById, allIds: answerIds },
    activeQuestionId: firstQuestion.id,
    score: '$0',
  };
}

function setAnswerId(state, { payload: { id } }) {
  return {
    ...state,
    selectedAnswerId: id,
  };
}

function setActiveQuestionId(state, { payload: { id } }) {
  return {
    ...state,
    activeQuestionId: id,
  };
}

function setIsQuestionResultVisible(state, { payload: { isVisible } }) {
  return {
    ...state,
    isQuestionResultVisible: isVisible,
  };
}

function setScore(state, { payload: { score } }) {
  return {
    ...state,
    score,
  };
}

const handlers = {
  [RESET_GAME_STATE]: resetGameState,
  [INITIALIZE_GAME_REQUEST]: startLoading,
  [INITIALIZE_GAME_SUCCESS]: initializeGameSuccess,
  [INITIALIZE_GAME_FAILURE]: finishLoading,
  [SET_ANSWER_ID]: setAnswerId,
  [SET_ACTIVE_QUESTION_ID]: setActiveQuestionId,
  [SET_IS_QUESTION_RESULT_VISIBLE]: setIsQuestionResultVisible,
  [SET_SCORE]: setScore,
};

export default createReducer(initialState, handlers);
