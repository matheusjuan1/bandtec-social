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
        font-family: 'Exo 2', sans-serif;
        background-color: #fafafa;
        color: #333;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        padding-top: 4rem;
    }
    a{
        text-decoration: none;
        color: #333;
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

    .title {
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
    }
    .title::after {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-color:#FF005C;
        position: absolute;
        bottom: 1.2px;
        left: -5px;
        border-radius: 0.2rem;
        z-index: -1;
    }

    .container {
        max-width: 65rem;
        padding: 0 1rem;
        margin: 0 auto;
    }

    .animeLeft {
        opacity: 0;
        transform:translateX(-20px);
        animation: animeLeft .35s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }
`;