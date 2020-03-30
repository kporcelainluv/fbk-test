import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
  font-family: CoFo Sans, Arial, sans-serif;
  background-color: #fff;
  
  a:focus, button:focus, input[type='submit'] {
     outline: ${props => props.theme.colors.black} auto 3px;
  }

 }
  
  @font-face {
    font-family: "CoFo Sans";
    font-weight: normal;
    src: url('./fonts/CoFoSans-Regular.woff2') format("woff2"),
      url('./fonts/CoFoSans-Regular.woff') format("woff");
    font-display: swap;
  }
  
  @font-face {
    font-family: "CoFo Sans Bold";
    font-weight: bold;
    src: url("./fonts/CoFoSans-Bold.woff2") format("woff2"), 
    url("./fonts/CoFoSans-Bold.woff") format("woff");
    font-display: swap;
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
  
 
  
  
`;
