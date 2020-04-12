import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Basics } from 'styles';
import { Nav } from 'components';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BodyText = styled.h1`
  margin-top: 300px;
  text-align: center;
  font-family: ${Basics.fonts.MadeSoulmazeBrush};
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;

  color: ${Basics.colors.black};
`;

const App = ({ theme, toggleTheme }) => (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      <GlobalStyle />
      <BodyText>
        404
      </BodyText>
      <Nav theme={theme} toggleTheme={toggleTheme}/>
    </PageContainer>
);

export default App;
