import styled from 'styled-components';

const PrizeCell = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 0.8rem 2.4rem;
  text-align: center;
  width: 100%;
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

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export default PrizeCell;
