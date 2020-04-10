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
  flex-direction: column;
  margin: 200px 180px 30px 200px;
  ${Screen.largePhone`
  margin-left: 10px;
  margin-right: 10px;
`};
`;

const App = () => (
  <AppContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
  </AppContainer>
);

export default App;
