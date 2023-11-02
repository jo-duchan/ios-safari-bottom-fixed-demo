import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const fontFamily = "'Open Sans', sans-serif";

const GlobalStyle = createGlobalStyle`
${reset};

:root {
    -webkit-tap-highlight-color: transparent;
}

html, body, #root {
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: ${fontFamily};
}

#overlays {
    pointer-events: none;
}

`;

export default GlobalStyle;
