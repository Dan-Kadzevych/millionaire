import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home, Game } from 'pages';

import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
