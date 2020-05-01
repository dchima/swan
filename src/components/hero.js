import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import { content } from 'config';
import Socials from './socials';

const HeroContainer = styled.div`
${Decors.animate.fadeIn(10)};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 20vh;
  margin: 150px 320px 0px 350px;
  
  ${Screen.pad`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.tablet`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.largePhone`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.smallPhone`
    margin: 0px 30px 0px 20px;
  `};
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
  font-weight: 500;
  font-size: 15px;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  a {
    ${Decors.inLine};
  }
`;

const App = () => (
  <HeroContainer>
    <Title>Chima Daniel</Title>
    <SubTitle>Software Engineer</SubTitle>
    <BodyText dangerouslySetInnerHTML={{ __html: content.bodyText }} />
    <Socials />
  </HeroContainer>
);

export default App;
