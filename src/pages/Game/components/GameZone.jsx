import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  getActiveQuestion,
  getSortedActiveQuestionAnswers,
  getSelectedAnswerIds,
} from 'store/game/selectors';
import { chooseAnswer } from 'store/game/operations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 0;
  flex-grow: 1000;
  min-width: 50%;
  padding: 13.3rem 8rem 12.2rem;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const Question = styled.div`
  font-size: 3.2rem;
  line-height: 3.712rem;
  font-weight: 600;
  max-width: 62.4rem;
  width: 100%;
`;

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 3.2rem;
  width: 100%;
  max-width: 84rem;
`;

const AnswerCell = styled.div`
  cursor: pointer;
  background-color: ${({ theme, selected, correct, wrong }) => {
    if (selected) {
      return theme.colors.primary.xLight;
    }

    if (correct) {
      return theme.colors.success.light;
    }

    if (wrong) {
      return theme.colors.error.light;
    }

    return theme.colors.common.white;
  }};
  position: relative;
  padding: 2.45rem 3.2rem;
  border: 1px solid
    ${({ theme, selected, correct, wrong }) => {
      if (selected) {
        return theme.colors.primary.main;
      }

      if (correct) {
        return theme.colors.success.main;
      }

      if (wrong) {
        return theme.colors.error.main;
      }

      return theme.colors.common.black40;
    }};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

const AnswerSymbol = styled.span`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-right: 8px;
`;

function GameZone() {
  const dispatch = useDispatch();
  const question = useSelector(getActiveQuestion);
  const possibleAnswers = useSelector(getSortedActiveQuestionAnswers);
  const selectedAnswerIds = useSelector(getSelectedAnswerIds);

  return (
    <Container>
      <Question>{question.text}</Question>
      <Answers>
        {possibleAnswers.map(({ id, label, text }) => (
          <AnswerCell
            selected={selectedAnswerIds.includes(id)}
            onClick={() => dispatch(chooseAnswer(id))}
            key={id}
          >
            <AnswerSymbol>{label}</AnswerSymbol>
            {text}
          </AnswerCell>
        ))}
      </Answers>
    </Container>
  );
}

export default GameZone;
