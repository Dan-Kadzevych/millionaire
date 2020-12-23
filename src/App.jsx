import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from 'pages';

import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
