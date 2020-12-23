import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getGameConfig } from 'store/game/operations';
import { GameZone, PrizesZone } from './components';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameConfig());
  }, []);

  return (
    <Container>
      <GameZone />
      <PrizesZone />
    </Container>
  );
}

export default Game;
