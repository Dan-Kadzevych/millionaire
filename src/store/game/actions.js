import {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  ADD_ANSWER,
  SET_ACTIVE_QUESTION_ID,
} from './types';

function resetGameState() {
  return {
    type: RESET_GAME_STATE,
  };
}

function initializeGameRequest() {
  return {
    type: INITIALIZE_GAME_REQUEST,
  };
}

function initializeGameSuccess(data) {
  return {
    type: INITIALIZE_GAME_SUCCESS,
    payload: {
      data,
    },
  };
}

function initializeGameFailure() {
  return {
    type: INITIALIZE_GAME_FAILURE,
  };
}

function addAnswer(id) {
  return {
    type: ADD_ANSWER,
    payload: { id },
  };
}

function setActiveQuestionId(id) {
  return {
    type: SET_ACTIVE_QUESTION_ID,
    payload: { id },
  };
}

export {
  resetGameState,
  initializeGameRequest,
  initializeGameSuccess,
  initializeGameFailure,
  addAnswer,
  setActiveQuestionId,
};
