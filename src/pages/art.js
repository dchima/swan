import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 700px;
  flex-direction: column;
  margin: 100px 180px 30px 200px;
  ${Screen.largePhone`
    margin: 50px 10px 30px 10px;
  `};
`;

const Holder = styled.p`
  margin-top: 20%;
  margin-left: 43%;
  ${Screen.largePhone`
  margin-top: 50%;
  margin-left: 35%;
`};
`;
const App = ({ theme, toggleTheme }) => (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <GlobalStyle />
        <Holder>coming soon</Holder>
        <Nav theme={theme} toggleTheme={toggleTheme}/>
      </AppContainer>
);

export default App;
