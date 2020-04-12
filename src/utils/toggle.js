import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Screen } from 'styles';
import { Brightness } from 'components/svg';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com

const BrightnessContainer = styled.button`
  position: fixed;
  border: none;
  background-color: transparent;
  outline: none;
  margin-top: 30px;
  right: 150px;
  svg {
    fill: ${({ theme }) => theme.button};
    width: 30px;
    height: 30px;
    ${Screen.miniTablet`
      width: 25px;
      height: 25px;
    `};
  }
  ${Screen.tablet`
    right: 50px;
  `};
  ${Screen.miniTablet`
    right: 25px;
  `};
`;

const Toggle = ({ toggleTheme }) => (
    <BrightnessContainer onClick={toggleTheme} >
      <Brightness />
    </BrightnessContainer>
);

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
