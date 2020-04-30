import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import { content } from 'config';


const HeroContainer = styled.div`
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

const Title = styled.h1`
  font-size: ${Basics.fontSize.large};
  margin: 0;
  ${Screen.largePhone`
  font-size: 40px;
  `};
  ${Screen.smallPhone`
    font-size: 40px;
  `};
`;
const SubTitle = styled.h2`
  margin: 0px 0px 0px 0px;
  font-size: ${Basics.fontSize.small};
`;
const BodyText = styled.p`
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
  <HeroContainer>
    <Title>Chima Daniel</Title>
    <SubTitle>Software Engineer</SubTitle>
    <BodyText dangerouslySetInnerHTML={{ __html: content.bodyText }} />
  </HeroContainer>
);

export default App;
