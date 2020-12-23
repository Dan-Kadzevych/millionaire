import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  padding: 2rem 2.4rem;
  min-width: 29.6rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.32rem;
  border-radius: 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export default StyledButton;
