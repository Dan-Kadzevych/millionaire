import {
  GET_GAME_CONFIG_REQUEST,
  GET_GAME_CONFIG_SUCCESS,
  GET_GAME_CONFIG_FAILURE,
} from './types';

function getGameConfigRequest() {
  return {
    type: GET_GAME_CONFIG_REQUEST,
  };
}

function getGameConfigSuccess(data) {
  return {
    type: GET_GAME_CONFIG_SUCCESS,
    payload: {
      data,
    },
  };
}

function getGameConfigError() {
  return {
    type: GET_GAME_CONFIG_FAILURE,
  };
}

export { getGameConfigRequest, getGameConfigSuccess, getGameConfigError };
