import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import logo from 'assets/images/hand.png';

import { getScore } from 'store/game/selectors';
import { Button, H1 } from 'components';

const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  margin-right: 3.2rem;
  width: 50%;
`;

const TextContent = styled.div`
  width: 50%;
`;

const TotalText = styled.span`
  font-size: 3.2rem;
  line-height: 3.712rem;
  font-weight: 600;
  opacity: 0.5;
`;

function Final() {
  const score = useSelector(getScore);

  if (score === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ContentContainer>
        <Image src={logo} alt="" />
        <TextContent>
          <TotalText>Total score:</TotalText>
          <H1>{score} earned</H1>
          <Button as={Link} to="/game">
            Try Again
          </Button>
        </TextContent>
      </ContentContainer>
    </Container>
  );
}

export default Final;
