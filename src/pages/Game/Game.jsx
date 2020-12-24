import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { initializeGame } from 'store/game/operations';
import { getIsConfigLoading } from 'store/game/selectors';
import { GameZone, PrizesZone } from './components';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

function Game() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsConfigLoading);

  useEffect(() => {
    dispatch(initializeGame());
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <GameZone />
      <PrizesZone />
    </Container>
  );
}

export default Game;
