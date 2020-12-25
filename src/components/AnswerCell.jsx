import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: ${({ theme, correct, wrong, selected }) => {
    if (correct) {
      return theme.colors.success.main;
    }

    if (wrong) {
      return theme.colors.error.main;
    }

    if (selected) {
      return theme.colors.primary.main;
    }

    return theme.colors.common.black40;
  }};
`;

const StyledCell = styled.div`
  background-color: ${({ theme, selected, correct, wrong }) => {
    if (correct) {
      return theme.colors.success.light;
    }

    if (wrong) {
      return theme.colors.error.light;
    }

    if (selected) {
      return theme.colors.primary.xLight;
    }

    return theme.colors.common.white;
  }};
  width: 90%;
  z-index: 21;
  cursor: pointer;
  position: relative;
  padding: 2.45rem 3.2rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ theme, selected, correct, wrong }) => {
    if (correct) {
      return theme.colors.success.main;
    }

    if (wrong) {
      return theme.colors.error.main;
    }

    if (selected) {
      return theme.colors.primary.main;
    }

    return theme.colors.common.black40;
  }};

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding: 2rem 3rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 2rem 2.4rem;
  }

  &:hover {
    & + ${Line} {
      background-color: ${({ theme, correct, wrong }) => {
        if (correct) {
          return theme.colors.success.main;
        }

        if (wrong) {
          return theme.colors.error.main;
        }

        return theme.colors.primary.main;
      }};
    }

    border-color: ${({ theme, correct, wrong }) => {
      if (correct) {
        return theme.colors.success.main;
      }

      if (wrong) {
        return theme.colors.error.main;
      }

      return theme.colors.primary.main;
    }};
  }
`;

const AnswerSymbol = styled.span`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-right: 8px;
`;

function AnswerCell({ correct, wrong, selected, handleClick, label, text }) {
  return (
    <Container>
      <StyledCell
        onClick={handleClick}
        correct={correct}
        wrong={wrong}
        selected={selected}
      >
        <AnswerSymbol>{label}</AnswerSymbol>
        {text}
      </StyledCell>
      <Line correct={correct} wrong={wrong} selected={selected} />
    </Container>
  );
}

AnswerCell.propTypes = {
  correct: PropTypes.string.isRequired,
  wrong: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.bool.isRequired,
  label: PropTypes.bool.isRequired,
  text: PropTypes.bool.isRequired,
};

export default AnswerCell;
