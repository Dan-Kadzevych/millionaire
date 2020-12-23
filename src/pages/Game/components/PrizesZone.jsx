import React from 'react';
import styled from 'styled-components';

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
  border: 1px solid ${({ theme }) => theme.colors.common.black40};

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

function PrizesZone() {
  return (
    <Container>
      <Prizes>
        <PrizeCell>$1,000,000</PrizeCell>
      </Prizes>
    </Container>
  );
}

export default PrizesZone;
