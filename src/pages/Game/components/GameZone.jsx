import React from 'react';
import styled from 'styled-components';

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
  background-color: ${({ theme }) => theme.colors.common.white};
  position: relative;
  padding: 2.45rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.colors.common.black40};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

const AnswerSymbol = styled.span`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-right: 8px;
`;

function GameZone() {
  return (
    <Container>
      <Question>
        How old your elder brother was 10 years before you was born, mate?
      </Question>
      <Answers>
        <AnswerCell>
          <AnswerSymbol>A</AnswerSymbol>10 years
        </AnswerCell>
      </Answers>
    </Container>
  );
}

export default GameZone;
