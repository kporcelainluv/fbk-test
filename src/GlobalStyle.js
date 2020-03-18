import { createGlobalStyle } from "styled-components";

import cofoRegular from "./fonts/CoFoSans-Regular.woff";
import cofoRegular2 from "./fonts/CoFoSans-Regular.woff2";
import cofoBold from "./fonts/CoFoSans-Bold.woff";
import cofoBold2 from "./fonts/CoFoSans-Bold.woff2";

export default createGlobalStyle`
  * {
    box-sizing: border-box
  }
  
  @font-face {
    font-family: "CoFo Sans";
    font-weight: normal;
    src: url(${cofoRegular}) format("woff2"),
      url(${cofoRegular2}) format("woff");
  }
  
  @font-face {
    font-family: "CoFo Sans Bold";
    font-weight: bold;
    src: url(${cofoBold}) format("woff2"), url(${cofoBold2}) format("woff");
  }
  
  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
  
  body {
    max-width: 375px;
    background-color: mistyrose;
    margin: 0 auto;
  }
`;
