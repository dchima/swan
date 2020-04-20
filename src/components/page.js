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
  font-size: ${Basics.fontSize.xxlarge};
  color: ${({ theme }) => theme.color};
  font-weight: 900;
  margin: 0;
  ${Screen.largePhone`
  font-size: 40px;
  `};
  ${Screen.smallPhone`
    font-size: 40px;
  `};
`;
const SubTitle = styled.h2`
  margin: 0px;
  font-size: 17px;
  ${Screen.largePhone`
  font-size: 13px;
  `};
  ${Screen.smallPhone`
    font-size: 12px;
  `};
`;
const BodyText = styled.p`
  padding-top: 150px;
  font-size: 20px;
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
