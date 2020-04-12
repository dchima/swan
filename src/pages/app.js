import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';

import { lightTheme, darkTheme } from 'utils/theme';
import { DarkMode } from 'utils';
import {
  Nav,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 200px 180px 30px 200px;
  ${Screen.largePhone`
  margin-left: 10px;
  margin-right: 10px;
`};
`;

const App = () => {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Nav theme={theme} toggleTheme={toggleTheme}/>
        </ThemeProvider>
      </AppContainer>
  );
};

export default App;
