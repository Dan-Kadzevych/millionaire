const prefix = '[Game Reducer]';

const RESET_GAME_STATE = `${prefix} Reset Game State`;

const INITIALIZE_GAME_REQUEST = `${prefix} Initialize Game Request`;
const INITIALIZE_GAME_SUCCESS = `${prefix} Initialize Game Success`;
const INITIALIZE_GAME_FAILURE = `${prefix} Initialize Game Failure`;

const ADD_ANSWER = `${prefix} Add Answer`;
const SET_ACTIVE_QUESTION_ID = `${prefix} Set Active Question Id`;

export {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  ADD_ANSWER,
  SET_ACTIVE_QUESTION_ID,
};
