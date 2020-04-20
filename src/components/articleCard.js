import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
// import {
//   SvgExternalLink,
// } from './svg';

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 60px;
  width: 440px;
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
  font-weight: 900;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  ${Screen.smallPhone`
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.color};
  ${Decors.inLine};
`;
// const Redirects = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
// `;


// const Item = styled.div`
//   position: relative;
//   &:hover,
//   &:focus {
//     transform: translateY(-5px);
//     transition: ${Basics.transition};
//   }
// `;

// const Svg = styled.a`
//   position: relative;
//   float: left;
//   &:hover,
//   &:focus {
//     svg {
//       fill:${({ theme }) => theme.color};
//     }
//   }
//   svg {
//     fill: ${({ theme }) => theme.link};
//     width: 22px;
//     height: 22px;
//   }
// `;

const ArticleCard = ({ content }) => (
    <Card>
    <ContentContainer>
      <Title>
        <TitleLink
        arial-label='link'
        href={content.link || content.slug}
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
      {/* <Redirects>
        {content.link
          && <Item>
            <Svg
              arial-label='link'
              href={content.link}
              target="_blank">
              <SvgExternalLink />
            </Svg>
          </Item>
        }
      </Redirects> */}
    </ContentContainer>
  </Card>
);

export default ArticleCard;
