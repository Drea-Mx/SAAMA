import { createGlobalStyle } from 'styled-components';

import paneot from '../../assets/fonts/PPPangramSans-Semibold.eot';
import pansvg from '../../assets/fonts/PPPangramSans-Semibold.svg';
import panttf from '../../assets/fonts/PPPangramSans-Semibold.ttf';
import panwoff from '../../assets/fonts/PPPangramSans-Semibold.woff';
import panwoff2 from '../../assets/fonts/PPPangramSans-Semibold.woff2';

import panregeot from '../../assets/fonts/PPPangramSans-SlimRegular.eot';
import panregsvg from '../../assets/fonts/PPPangramSans-SlimRegular.svg';
import panregttf from '../../assets/fonts/PPPangramSans-SlimRegular.ttf';
import panregwoff from '../../assets/fonts/PPPangramSans-SlimRegular.woff';
import panregwoff2 from '../../assets/fonts/PPPangramSans-SlimRegular.woff2';



export const Typography = createGlobalStyle`
@font-face {
    font-family: 'PP Pangram Sans';
    src: url('${paneot}');
    src: url('${panwoff2}') format('woff2'),
        url('${panwoff}') format('woff'),
        url('${panttf}') format('truetype'),
        url('${pansvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'PP Pangram Sans Slim';
    src: url('${panregeot}');
    src: url('${panregwoff2}') format('woff2'),
        url('${panregwoff}') format('woff'),
        url('${panregttf}') format('truetype'),
        url('${panregsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'PP Pangram Sans', sans-serif;
    --slim: 'PP Pangram Sans Slim', sans-serif;
    --black: #2E331E;
    --white: #EBE6DD;
    --gray: #F7F7F7;
    --darkgray: #E6E6E6;
    --orange: #1A1A1A;
    --darkOrange: #E03715;
    --gra: #999999;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
      background-color: var(--white);
        color: var(--black);
        font-size: 16px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    p {
        font-family: var(--slim);
        font-weight: lighter;
    }
`
