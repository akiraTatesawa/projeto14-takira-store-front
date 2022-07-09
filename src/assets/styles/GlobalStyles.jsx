import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers  */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Global Styles */

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Righteous&display=swap');

    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: 2px solid var(--brand-hover);
        outline-offset: 1px;
    }

    body {
        --brand: #30475E;
        --brand-sec: #64849E;
        --text-on-brand: #FFFFFF;
        --brand-hover: #7E8A97;

        --text-primary: #27272A;
        --text-sec: #71717A;
        --text-warning: #ECAB3F;
        --text-error: #D3524A;
        --text-ok: #4CBD4E;
        --container-bg: #F4F4F5;

        background-color: #ffffff;

        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: var(--text-primary);
    }

    #root {
        width: 100%;
        height: 100vh;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-family: 'Righteous', cursive;
    }

    strong {
        font-weight: 600;
    }
`;
