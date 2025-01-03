import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: clip;

  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: flex-start;

  column-gap: 21px;

  width: 100vh;
  min-height: 100%;
  max-height: min-content;

  z-index: 2;
`;

export const Content = styled.div`
  display: flex;

  column-gap: 21px;

  min-width: max-content;

  will-change: transform;

  animation: ${({ $width }) => css`
      ${moveAnimation($width)}
    `}
    20s linear infinite;
`;

const moveAnimation = (width) => keyframes`
    0% {
      translate: 0;
    }
    100% {
      translate: -${width}px;
    }
  `;

export const ContentSidebarHandle = styled.div`
  display: flex;

  column-gap: 21px;

  min-width: max-content;

  margin: 0 16px;
`;
