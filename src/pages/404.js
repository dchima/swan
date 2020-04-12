import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen, Basics } from 'styles';
import { Nav } from 'components';
import { Swan } from 'components/svg';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SwanContainer = styled.div`
  margin-top: 150px;
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 400px;
    height: 400px;
    ${Screen.miniTablet`
      width: 300px;
      height: 300px;
    `};
  }
`;

const BodyText = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;
  ${Screen.miniTablet`
    font-size: ${Basics.fontSize.large};
  `};
`;

const App = ({ theme, toggleTheme }) => (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      <GlobalStyle />
      <SwanContainer>
        <Swan />
      </SwanContainer>
      <BodyText>
        404
      </BodyText>
      <Nav theme={theme} toggleTheme={toggleTheme}/>
    </PageContainer>
);

export default App;
