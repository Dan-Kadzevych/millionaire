import { combineReducers } from 'redux';

import createReducer from 'utils/redux/createReducer';
import {
  // GET_GAME_CONFIG_REQUEST,
  GET_GAME_CONFIG_SUCCESS,
  // GET_GAME_CONFIG_FAILURE,
} from './types';

const initialState = {
  questions: {
    byId: {},
    allIds: {},
  },
  answers: {
    byId: {},
    allIds: {},
  },
};

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

const questionHandlers = {
  [GET_GAME_CONFIG_SUCCESS]: getQuestionsSuccess,
};

const questionsReducer = createReducer(
  initialState.questions,
  questionHandlers,
);

const answerHandlers = {
  [GET_GAME_CONFIG_SUCCESS]: getAnswersSuccess,
};

const answersReducer = createReducer(initialState.answers, answerHandlers);

export default combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
});
