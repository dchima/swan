import { createGlobalStyle } from 'styled-components';
import Basics from './basics';
import Screen from './screen';
import * as Fonts from './fonts';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Made Soulmaze Brush';
    src: url(${Fonts.MadeSoulmazeBrushRegularWOFF2}) format('woff2'),
    url(${Fonts.MadeSoulmazeBrushRegularWOFF}) format('woff'),
    url(${Fonts.MadeSoulmazeBrushRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Monoton';
    src: url(${Fonts.MonotonRegularTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldItalicTFF}) format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Be Vietnam';
    src: url(${Fonts.BeVietnamBoldWOFF2}) format('woff2'),
    url(${Fonts.BeVietnamBoldWOFF}) format('woff'),
    url(${Fonts.BeVietnamBoldTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Be Vietnam';
    src: url(${Fonts.BeVietnamBoldItalicWOFF2}) format('woff2'),
    url(${Fonts.BeVietnamBoldItalicWOFF}) format('woff'),
    url(${Fonts.BeVietnamBoldItalicTFF}) format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Be Vietnam';
    src: url(${Fonts.BeVietnamItalicWOFF2}) format('woff2')
    url(${Fonts.BeVietnamItalicWOFF}) format('woff'),
    url(${Fonts.BeVietnamItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Be Vietnam';
    src: 
    url(${Fonts.BeVietnamRegularWOFF2}) format('woff2'),
    url(${Fonts.BeVietnamRegularWOFF}) format('woff'),
    url(${Fonts.BeVietnamRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Lilita One';
    src: url(${Fonts.LilitaOneRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.body};
    font-family: ${Basics.fonts.MadeSoulmazeBrush};

  }
  

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    color: ${Basics.colors.deepBlue};
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${Basics.colors.neonBlue};
      outline: 0;
    }
  }

  p {
    font-size: 13px;
    font-family: ${Basics.fonts.BeVietnam};
    color: ${Basics.colors.black};
    font-weight: 900;
    word-spacing: 2px;

  }

  ol { 
    counter-reset: item;
    list-style-type: none;
    margin-left: -2.5em;
  }
  li { 
    display: block; 
    font-size: 28px;
    font-family: ${Basics.fonts.BalooBhaina};
    color: ${Basics.colors.deepBlue};
    font-weight: 500;
    word-spacing: 2px;

    ${Screen.tablet`
      font-size: 22px;
    `};
  }

  li:before { 
    content: counter(item, decimal-leading-zero) ". "; 
    counter-increment: item;
    color: ${Basics.colors.deepBlue};
    font-weight: 400;
  }
`;

export default GlobalStyle;
