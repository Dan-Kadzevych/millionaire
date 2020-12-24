import { normalize } from 'normalizr';

import { fetchGameConfig } from 'api/requests';
import { areArraysEqual } from 'utils/helpers';
import {
  resetGameState,
  initializeGameRequest,
  initializeGameSuccess,
  initializeGameFailure,
  addAnswer,
  setActiveQuestionId,
} from './actions';
import { gameConfigSchema } from './schemas';
import {
  getActiveQuestionCorrectAnswerIds,
  getSelectedAnswerIds,
  getSortedQuestionsList,
  getActiveQuestionId,
} from './selectors';

function initializeGame() {
  return async (dispatch) => {
    try {
      dispatch(resetGameState());
      dispatch(initializeGameRequest());

      const config = await fetchGameConfig();

      const data = normalize(config, gameConfigSchema);

      const answerIds = Object.keys(data.entities.answers);
      const formattedData = {
        ...data,
        result: { ...data.result, answers: answerIds },
      };

      dispatch(initializeGameSuccess(formattedData));
    } catch (e) {
      dispatch(initializeGameFailure());
    }
  };
}

function goNextQuestion() {
  return (dispatch, getState) => {
    const state = getState();
    const questions = getSortedQuestionsList(state);
    const activeQuestionId = getActiveQuestionId(state);

    const indexOfActiveQuestion = questions.findIndex(
      ({ id }) => id === activeQuestionId,
    );
    const indexOfNextQuestion = indexOfActiveQuestion + 1;
    const nextQuestion = questions[indexOfNextQuestion];

    if (indexOfNextQuestion < questions.length && nextQuestion) {
      dispatch(setActiveQuestionId(nextQuestion.id));
    }
  };
}

function chooseAnswer(id) {
  return (dispatch, getState) => {
    dispatch(addAnswer(id));

    const state = getState();
    const correctAnswerIds = getActiveQuestionCorrectAnswerIds(state);
    const selectedAnswerIds = getSelectedAnswerIds(state);

    if (!correctAnswerIds.includes(id)) {
      return;
    }

    if (areArraysEqual(correctAnswerIds, selectedAnswerIds)) {
      dispatch(goNextQuestion());
    }
  };
}

export { chooseAnswer, initializeGame };
