import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  height: 400px;
  width: 350px;
  ${Screen.largePhone`
    margin: 20px;
    width: 100%;
  `};
  ${Screen.smallPhone`
  margin: 10px 3px;
  width: 300px;
`};
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  overflow: hidden;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;
const Title = styled.h1`
  color: ${Basics.colors.rose};
  font-weight: 500;
  font-size: 40px;
  padding-top: 20px;
  
  ${Screen.tablet`
    padding-top: 0px;
  `};
  ${Screen.smallPhone`
  font-size: 30px;
`};
`;


const BodyText = styled.p`
  position: relative;
`;

const ProjectCard = ({ content }) => (
  <Card>
  <ContentContainer>
    <Title>
      {content.title}
    </Title>
    <BodyText>
      {content.category} <br />
      {content.description} <br />
      {content.stacks} <br />
      {content.githubUrl} <br />
      {content.externalUrl} <br />
      {content.docsUrl} <br />
    </BodyText>
  </ContentContainer>
</Card>
);
export default ProjectCard;
