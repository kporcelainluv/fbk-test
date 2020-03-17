import { createGlobalStyle } from "styled-components";

import cofoRegular from "./CoFoSans-Regular.woff";
import cofoRegular2 from "./CoFoSans-Regular.woff2";
import cofoBold from "./CoFoSans-Bold.woff";
import cofoBold2 from "./CoFoSans-Bold.woff2";

export default createGlobalStyle`
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
`;
