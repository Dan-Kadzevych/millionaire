import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/images/hand.png';

import { Button, H1 } from 'components';

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.common.white} 50%,
    ${({ theme }) => theme.colors.primary.xLight} 50%
  );
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
  flex: 50%;
`;

function Home() {
  return (
    <Container>
      <ContentContainer>
        <Image src={logo} alt="" />
        <TextContent>
          <H1>Who wants to be a millionaire?</H1>
          <Button as={Link} to="/game">
            Start
          </Button>
        </TextContent>
      </ContentContainer>
    </Container>
  );
}

export default Home;
