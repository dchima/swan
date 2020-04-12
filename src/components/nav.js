import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Basics, Screen } from 'styles';
import { Toggle } from 'utils';
import { Logo } from 'components/svg';

const NavContainer = styled.div`
  position: fixed;
  height: 12vh;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background-color: transparent;
  width: 100%;
  ${Screen.largePhone`
    height: 80px;
  `};
`;

const LogoContainer = styled.div`
  position: fixed;
  margin-top: -20px;
  margin-left: 150px;
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 30px;
    height: 30px;
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