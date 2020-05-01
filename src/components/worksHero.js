import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import { content } from 'config';


const AppContainer = styled.div`
  ${Decors.animate.fadeIn(2)};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 20vh;
  margin: 180px 320px 0px 350px;
  ${Screen.largePhone`
  margin: 150px 20px 0px 20px;
  `};
  ${Screen.smallPhone`
  margin: 100px 30px 0px 20px;
  `};
  a {
    ${Decors.inLine};
  }
`;

const BodyText = styled.p`
  position: relative;
  font-weight: 900;
  font-size: 15px;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  ${Screen.smallPhone`
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const App = () => (
  <AppContainer>
    <BodyText dangerouslySetInnerHTML={{ __html: content.bodyText2 }} />
  </AppContainer>
);

export default App;
