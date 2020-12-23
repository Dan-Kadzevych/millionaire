import { combineReducers } from 'redux';

import createReducer from 'utils/redux/createReducer';
import {
  GET_GAME_CONFIG_REQUEST,
  GET_GAME_CONFIG_SUCCESS,
  GET_GAME_CONFIG_FAILURE,
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
};

function finishLoading() {
  return false;
}

function startLoading() {
  return true;
}

function getQuestionsSuccess(
  state = initialState.questions,
  {
    payload: {
      data: {
        entities: { questions: questionsById },
        result: { questions: questionIds },
      },
    },
  },
) {
  return { ...state, byId: questionsById, allIds: questionIds };
}

function getAnswersSuccess(
  state = initialState.answers,
  {
    payload: {
      data: {
        entities: { answers: answersById },
        result: { answers: answerIds },
      },
    },
  },
) {
  return { ...state, byId: answersById, allIds: answerIds };
}

const isLoadingHandlers = {
  [GET_GAME_CONFIG_REQUEST]: startLoading,
  [GET_GAME_CONFIG_SUCCESS]: finishLoading,
  [GET_GAME_CONFIG_FAILURE]: finishLoading,
};

const questionHandlers = {
  [GET_GAME_CONFIG_SUCCESS]: getQuestionsSuccess,
};

const answerHandlers = {
  [GET_GAME_CONFIG_SUCCESS]: getAnswersSuccess,
};

const isLoadingReducer = createReducer(
  initialState.isLoading,
  isLoadingHandlers,
);

const questionsReducer = createReducer(
  initialState.questions,
  questionHandlers,
);

const answersReducer = createReducer(initialState.answers, answerHandlers);

export default combineReducers({
  isLoading: isLoadingReducer,
  questions: questionsReducer,
  answers: answersReducer,
});
