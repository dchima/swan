import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { lightTheme, darkTheme } from 'utils/theme';
import { DarkMode } from 'utils';
import {
  App,
  ErrorPage,
} from 'pages';

const Hide = styled.div`
  font-family: 'Made Soulmaze Brush';
  display: hidden;
`;
const Main = () => {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
      <ThemeProvider theme={themeMode}>
        <Hide />
        <Switch>
          <Route exact path='/' render={() => <App theme={theme} toggleTheme={toggleTheme}/>} />
          <Route exact path='/404' render={() => <ErrorPage theme={theme} toggleTheme={toggleTheme}/>} />
          <Redirect to="/404" />
        </Switch>
      </ThemeProvider>
  );
};

export default Main;
