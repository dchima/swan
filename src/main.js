import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { lightTheme, darkTheme } from 'utils/theme';
import { DarkMode } from 'utils';
import {
  App,
  Projects,
  BestOf,
  Collection,
  ErrorPage,
  Reader,
} from 'pages';

const Main = () => {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
      <ThemeProvider theme={themeMode}>
        <Switch>
          <Route exact path='/' render={() => <App theme={theme} toggleTheme={toggleTheme}/>} />
          <Route exact path='/projects' render={() => <Projects theme={theme} toggleTheme={toggleTheme}/> } />
          <Route exact path='/bestof' render={() => <BestOf theme={theme} toggleTheme={toggleTheme}/>} />
          <Route exact path='/collection' render={() => <Collection theme={theme} toggleTheme={toggleTheme}/>} />
          <Route path='/collection/:slug' render={(props) => <Reader {...props} theme={theme} toggleTheme={toggleTheme}/>} />
          <Route exact path='/404' render={() => <ErrorPage theme={theme} toggleTheme={toggleTheme}/>} />
          <Redirect to="/404" />
        </Switch>
      </ThemeProvider>
  );
};

export default Main;
