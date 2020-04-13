import { css } from 'styled-components';
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
};

export default decor;
