import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Screen } from 'styles';
import { Toggle } from 'utils';
import { Logo } from 'components/svg';

const NavContainer = styled.div`
  position: fixed;
  height: 10vh;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  ${Screen.largePhone`
    height: 50px;
  `};
`;

const LogoContainer = styled.div`
  position: absolute;
  margin-top: 0px;
  margin-left: 150px;
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 30px;
    height: 30px;
    ${Screen.miniTablet`
      width: 25px;
      height: 25px;
    `};
  }
  ${Screen.tablet`
    margin-left: 80px;
  `};
  ${Screen.miniTablet`
    margin-left: 25px;
  `};
`;

const Nav = ({ theme, toggleTheme }) => (
    <NavContainer>
      <LogoContainer>
        <Link to={'/'}>
          <Logo />
        </Link>
      </LogoContainer>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
    </NavContainer>
);

export default Nav;
