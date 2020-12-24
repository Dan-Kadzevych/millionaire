import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  getSortedQuestionsList,
  getActiveQuestionId,
  getAnsweredQuestionsIds,
} from 'store/game/selectors';

const Container = styled.div`
  flex-basis: 37.6rem;
  flex-grow: 1;
`;

const Prizes = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const PrizeCell = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 0.8rem 2.4rem;
  text-align: center;
  width: 24rem;
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary.main : theme.colors.common.black40};
  color: ${({ active, disabled, theme }) => {
    if (disabled) {
      return theme.colors.text.disabled;
    }

    if (active) {
      return theme.colors.primary.main;
    }

    return theme.colors.text.primary;
  }};

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

function PrizesZone() {
  const questions = useSelector(getSortedQuestionsList);
  const activeQuestionId = useSelector(getActiveQuestionId);
  const answeredQuestionsIds = useSelector(getAnsweredQuestionsIds);

  return (
    <Container>
      <Prizes>
        {[...questions].reverse().map(({ prize, id }) => (
          <PrizeCell
            key={id}
            disabled={answeredQuestionsIds.includes(id)}
            active={id === activeQuestionId}
          >
            {prize}
          </PrizeCell>
        ))}
      </Prizes>
    </Container>
  );
}

export default PrizesZone;
