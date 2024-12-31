import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SectionWrapper = css`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: ${({ $height }) => `${$height}px`};

  padding: 0 16px;

  margin: 0 auto;

  box-sizing: border-box;
`;

export const Category = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;

  text-align: center;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.beer};
`;
