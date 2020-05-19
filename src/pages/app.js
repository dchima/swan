import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  Hero,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 700px;
  flex-direction: column;
  margin: 100px 180px 30px 200px;
  ${Screen.tablet`
    margin: 100px 80px 100px 80px;
  `};
  ${Screen.miniTablet`
    margin: 100px 50px 100px 50px;
  `};
  ${Screen.largePhone`
    margin: 50px 10px 30px 10px;
  `};
`;

const App = ({ theme, toggleTheme }) => (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <GlobalStyle />
        <Hero />
        <Nav theme={theme} toggleTheme={toggleTheme}/>
      </AppContainer>
);

export default App;
