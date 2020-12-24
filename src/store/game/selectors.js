import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import takeWhile from 'lodash/takeWhile';

const getQuestionsById = (state) => state.game.questions.byId;
const getQuestionsIds = (state) => state.game.questions.allIds;
const getActiveQuestionId = (state) => state.game.activeQuestionId;
const getAnswersById = (state) => state.game.answers.byId;
const getIsConfigLoading = (state) => state.game.isLoading;
const getSelectedAnswerIds = (state) => state.game.selectedAnswerIds;

const getSortedQuestionsList = createSelector(
  getQuestionsById,
  getQuestionsIds,
  (questionsById, questionsIds) =>
    sortBy(
      questionsIds.map((id) => questionsById[id]),
      'orderPosition',
    ),
);

const getActiveQuestion = createSelector(
  getQuestionsById,
  getActiveQuestionId,
  (questionsById, activeQuestionId) => questionsById[activeQuestionId],
);

const getSortedActiveQuestionAnswers = createSelector(
  getActiveQuestion,
  getAnswersById,
  (activeQuestion, answersById) =>
    sortBy(
      activeQuestion.answers.map((id) => answersById[id]),
      'orderPosition',
    ),
);

const getActiveQuestionCorrectAnswerIds = createSelector(
  getActiveQuestion,
  (activeQuestion) => activeQuestion.correctAnswerIds,
);

const getAnsweredQuestionsIds = createSelector(
  getSortedQuestionsList,
  getActiveQuestionId,
  (questions, activeQuestionID) => {
    return takeWhile(
      questions.map(({ id }) => id),
      (id) => id !== activeQuestionID,
    );
  },
);

export {
  getActiveQuestion,
  getSelectedAnswerIds,
  getIsConfigLoading,
  getSortedActiveQuestionAnswers,
  getActiveQuestionCorrectAnswerIds,
  getActiveQuestionId,
  getSortedQuestionsList,
  getAnsweredQuestionsIds,
};
