import styled from "styled-components";

export const NextSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 4px;

  z-index: 1;
`;

export const Value = styled.div`
  font-size: 8px;
  font-weight: 400;
  line-height: 9.75px;
  text-align: center;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.frenchGrey};
`;
