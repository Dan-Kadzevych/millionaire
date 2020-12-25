import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
    
  body {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    box-sizing: border-box;
    line-height: 2.32rem;
    font-weight: 400;
  }
  
  html {
    font-size: 62.5%;
    
    ${({ theme }) => theme.breakpoints.down('lg')} {
      font-size: 50%
    }
  }
`;

export default GlobalStyle;
