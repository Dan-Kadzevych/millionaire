import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.common.black40};
`;

const StyledCell = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 0.8rem 2.4rem;
  text-align: center;
  width: 60%;
  z-index: 21;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, active }) =>
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
`;

function PrizeCell({ text, disabled, active }) {
  return (
    <Container>
      <Line active={active} />
      <StyledCell disabled={disabled} active={active}>
        {text}
      </StyledCell>
    </Container>
  );
}

PrizeCell.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
};

export default PrizeCell;
