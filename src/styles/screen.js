import { css } from 'styled-components';

const sizes = {
  xlargeScreen: 1440,
  largeScreen: 1200,
  pad: 1024,
  pc: 1000,
  tablet: 768,
  miniTablet: 600,
  largePhone: 480,
  phone: 376,
  smallPhone: 330,
};

// iterate through the sizes and create a media template
export const screen = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default screen;
