import createReducer from 'utils/redux/createReducer';
import { sortByOrder } from 'utils/helpers';
import {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  ADD_ANSWER,
  SET_ACTIVE_QUESTION_ID,
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
  selectedAnswerIds: [],
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
  };
}

function addAnswer(state, { payload: { id } }) {
  return {
    ...state,
    selectedAnswerIds: [...state.selectedAnswerIds, id],
  };
}

function setActiveQuestionId(state, { payload: { id } }) {
  return {
    ...state,
    activeQuestionId: id,
    selectedAnswerIds: [],
  };
}

const handlers = {
  [RESET_GAME_STATE]: resetGameState,
  [INITIALIZE_GAME_REQUEST]: startLoading,
  [INITIALIZE_GAME_SUCCESS]: initializeGameSuccess,
  [INITIALIZE_GAME_FAILURE]: finishLoading,
  [ADD_ANSWER]: addAnswer,
  [SET_ACTIVE_QUESTION_ID]: setActiveQuestionId,
};

export default createReducer(initialState, handlers);
