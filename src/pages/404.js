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

const BodyText = styled.p`
  margin-top: 300px;
  text-align: center;
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;
  font-family: ${Basics.fonts.MadeSoulmazeBrush};
  color: ${Basics.colors.black};
`;
function App() {
  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      <GlobalStyle />
      <BodyText>
        404
      </BodyText>
      <Nav />
    </PageContainer>

  );
}

export default App;
