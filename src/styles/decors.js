import { css, keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import basics from './basics';

const decor = {
  inLine: css`
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    position: relative;
    background-color: ${({ theme }) => theme.link};
    transition: ${basics.transition};
    opacity: 0.5;
  }
  `,
  animate: {
    fadeIn: (duration) => css`animation: ${duration}s ${keyframes(fadeIn)};`,
  },
};

export default decor;
