import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const GlabalStyleWrapper = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  html {
    background: linear-gradient(180deg, #b64100 0%, #000000 35%);

    height: auto;

}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.white};

    /* min-height: max-content; */

    height: 100%;

    overflow: hidden;

  }

  input,
  textarea,
  button {
    font-family: inherit
  }

  #root {
    display: flex;

    align-items: center;
    justify-content: space-between;

    flex-direction: column;

    /* min-height: max-content; */

    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
