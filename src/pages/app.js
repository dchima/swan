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
          <title>Chima Daniel</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content='Chima' />
          <meta name="twitter:description" content='Software Engineer' />
          <meta name="twitter:image" content='https://res.cloudinary.com/dxnchima/image/upload/v1607879575/personal/Screenshot_2020-12-13_at_18.12.27_bfypgd.png' />
        </Helmet>
        <GlobalStyle />
        <Hero />
        <Nav theme={theme} toggleTheme={toggleTheme}/>
      </AppContainer>
);

export default App;
