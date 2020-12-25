import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 5.6rem;
  line-height: 6.496rem;
  font-weight: 600;
  margin-bottom: 6.4rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 4.5rem;
    line-height: 5.7rem;
    margin-bottom: 5.9rem;
  }
`;

export default StyledH1;
