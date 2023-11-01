import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';

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
    position: fixed;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 900;
}

`;

export default GlobalStyle;
