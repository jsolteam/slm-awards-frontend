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
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
