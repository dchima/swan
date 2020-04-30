import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

const ContentContainer = styled.div`
  position: relative;
  padding: 10px 20px;
  margin-bottom: 100px;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;

const Title = styled.h2`
  font-size: ${Basics.fontSize.medium};
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  margin: 0px;
  ${Screen.largePhone`
  font-size: 22px;
  `};
  ${Screen.smallPhone`
    font-size: 22px;
  `};
`;
const SubTitle = styled.h2`
  margin: 0px 0px 0px 0px;
  font-size: ${Basics.fontSize.small};
`;
const BodyText = styled.p`
  padding-top: 50px;
  font-size: 15px;
  font-weight: 500;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  ${Screen.smallPhone`
    font-size: ${Basics.fontSize.xsmall};
  `};
`;


const Page = ({ content }) => (

  <ContentContainer>
    <Title>{content.title}</Title>
    <SubTitle>
      {content.category} by {content.author}
    </SubTitle>
    <BodyText dangerouslySetInnerHTML={{ __html: content.body }} />
  </ContentContainer>
);

export default Page;
