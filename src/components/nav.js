import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Basics, Screen } from 'styles';
import { Logo, Brightness } from 'components/svg';

const NavContainer = styled.div`
  position: fixed;
  height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${Basics.colors.paper};
  width: 100%;
  transition: ${Basics.transition};
  ${Screen.largePhone`
    height: 80px;
  `};
`;

const LogoContainer = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-left: 150px;
  svg {
    fill: ${Basics.colors.black};
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

const BrightnessContainer = styled.button`
  position: absolute;
  border: none;
  background-color: ${Basics.colors.paper};
  outline: none;
  margin-top: -20px;
  right: 150px;
  svg {
    fill: ${Basics.colors.black};
    width: 30px;
    height: 30px;
  }
  ${Screen.tablet`
    right: 50px;
  `};
  ${Screen.miniTablet`
    right: 25px;
  `};
`;


export default class Nav extends React.Component {
  render() {
    return (
      <NavContainer>
      <LogoContainer>
        <Link to={'/'}>
          <Logo />
        </Link>
      </LogoContainer>
      <BrightnessContainer>
        <Brightness />
      </BrightnessContainer>
      </NavContainer>
    );
  }
}
