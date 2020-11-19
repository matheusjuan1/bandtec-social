import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'exo 2';
        background-color: #fafafa;
        color: #333;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        padding-top: 4rem;
    }
    a{
        text-decoration: none;
    }

    html, body, #boby {
        height: 100%;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1rem!important;
    }

    .container {
        max-width: 65rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
`;