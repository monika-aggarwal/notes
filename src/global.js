import React from "react";
import { css, Global } from "@emotion/core";

const global = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 14px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-weight: 300;
    height: 100%;
    background-color: white;
  }
`;

export default () => (
  <React.Fragment>
    <Global styles={global} />
  </React.Fragment>
);
