import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 20px;
  width: 440px;
  ${Screen.largePhone`
    margin: 0px 3px;
    width: 100%;
  `};
  ${Screen.smallPhone`
  margin: 0px 3px;
  width: 300px;
`};
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;

const Title = styled.h2`
  margin: 0px;
  font-weight: 700;
  width: 85%;
  font-size: ${Basics.fontSize.medium};
  color: ${({ theme }) => theme.color};
  
  ${Screen.largePhone`
  font-size: 22px;
  `};
  ${Screen.smallPhone`
    font-size: 22px;
  `};
`;

const Subtitle = styled.h2`
  margin: 0px 0px 0px 0px;
  font-size: ${Basics.fontSize.small};
`;

const BodyText = styled.p`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
`;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.color};
  ${Decors.inLine};
`;

const ArticleCard = ({ content }) => (
    <Card>
    <ContentContainer>
      <Title>
        <TitleLink
        arial-label='link'
        href={content.link || `collection/${content.slug}`}
        target={content.link ? '_blank' : '' }>
          {content.title}
        </TitleLink>
      </Title>
      <Subtitle>
        {content.author} | {content.category}
      </Subtitle>
      <BodyText>
        {content.summary || content.description}
      </BodyText>
    </ContentContainer>
  </Card>
);

export default ArticleCard;
