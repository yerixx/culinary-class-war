import { createGlobalStyle, styled } from "styled-components";
// import NotoSansBlack from "@fonts/NotoSans-Black.woff2";
// import NotoSansBold from "@fonts/NotoSans-Bold.woff2";
// import NotoSansLight from "@fonts/NotoSans-Light.woff2";
// import NotoSansMedium from "@fonts/NotoSans-Medium.woff2";
// import NotoSansRegular from "@fonts/NotoSans-Regular.woff2";
// import NotoSansThin from "@fonts/NotoSans-Thin.woff2";
import { body6 } from "./font";

export const GlobalStyle = createGlobalStyle`
  * {
    overscroll-behavior-y: none;
    box-sizing: border-box;
    margin: 0;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  ul,li{
    list-style: none;
  }
  body{
    background:#000;
    color:#fff;
    overflow-x:hidden;
  }
  html {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::-webkit-scrollbar {
  display: none;
}
  @media (max-width: 768px) {
    html {
      display: block;
    }
  }

`;

export const Version = styled.div`
  position: absolute;
  z-index: 998;
  bottom: 0;
  left: 0;
  ${body6}
`;
