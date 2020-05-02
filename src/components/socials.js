import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { SocialFill } from 'components/svg';
import { links } from 'config';


const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
`;


const Item = styled.div`
  position: relative;
  margin-right: 24px;
  &:hover,
  &:focus {
    transform: translateY(-5px);
    transition: ${Basics.transition};
  }
`;

const Link = styled.a`
position: relative;
&:hover,
&:focus {
  svg {
    fill:${({ theme }) => theme.color};
  }
}
svg {
  fill: ${({ theme }) => theme.link};
  width: 18px;
  height: 18px;
  ${Screen.largePhone`
  width: 15px;
  height: 15px;
  `};
}
`;
const Socials = () => {
  const socials = links.socials.map(
    (item, i) => <Item key={i}>
      <Link
        href={item.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={item.name}>
        <SocialFill name={item.name} />
      </Link>
    </Item>,
  );
  return (
    <SocialContainer>
      {socials}
    </SocialContainer>
  );
};

export default Socials;
