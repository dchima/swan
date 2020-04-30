import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { links } from 'config';
import {
  StackFill,
  SvgGithub,
  SvgExternalLink,
  SvgDocument,
} from './svg';

const Card = styled.div`
  position: relative;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-right: 30px; //margin-right: 100px;
  margin-bottom: 60px;
  width: 440px; //width: 410px;
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
  font-size: ${Basics.fontSize.medium};
  color: ${({ theme }) => theme.color};
  
  ${Screen.largePhone`
  font-size: 22px;
  `};
  ${Screen.smallPhone`
    font-size: 22px;
  `};
`;

const Category = styled.h2`
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

const Redirects = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const StackContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  position: relative;
  &:hover,
  &:focus {
    transform: translateY(-5px);
    transition: ${Basics.transition};
  }
`;

const Link = styled.a`
  position: relative;
  float: left;
  padding: 5px;
  &:hover,
  &:focus {
    svg {
      fill:${({ theme }) => theme.color};
    }
  }
  svg {
    fill: ${({ theme }) => theme.link};
    width: 22px;
    height: 22px;
  }
`;

const ProjectCard = ({ content }) => {
  const stacks = content.stacks.map(
    (item, i) => <Item key={i}>
      <Link key={i}
        href={links.stackLinks[links.stackLinks.map(x => x.name).indexOf(item)].url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={item}>
        <StackFill name={item} />
      </Link>
    </Item>,
  );
  return (
    <Card>
    <ContentContainer>
      <Title>
        {content.title}
      </Title>
      <Category>
        {content.category}
      </Category>
      <BodyText>
        {content.description} <br />
      </BodyText>
      <StackContainer>
      <Redirects>
          {content.githubUrl
            && <Item>
              <Link
                arial-label='repo'
                href={content.githubUrl}
                target="_blank">
                <SvgGithub />
              </Link>
            </Item>
          }
          {content.docsUrl
            && <Item>
              <Link
                arial-label='paper'
                href={content.docsUrl}
                target="_blank">
                <SvgDocument />
              </Link>
            </Item>
          }
          {content.externalUrl
            && <Item>
              <Link
                arial-label='link'
                href={content.externalUrl}
                target="_blank">
                <SvgExternalLink />
              </Link>
            </Item>
          }
      </Redirects>
        {stacks}
      </StackContainer>
    </ContentContainer>
  </Card>
  );
};

export default ProjectCard;
