import styled, { css } from "styled-components";
import { ArrowAgle } from "../Icons";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 16px;
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 600;
  line-height: 15.85px;
`;

export const ArrowIcon = styled(ArrowAgle)`
  width: 15px;
  height: 15px;

  rotate: 90deg;
`;

export const Children = styled.div`
  font-size: 10px;
  font-weight: 600;
  line-height: 12.19px;
`;

export const Wrapper = styled.div`
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 15px;

  ${({ $isShow }) =>
    $isShow &&
    css`
      padding: 0;

      ${ArrowIcon} {
        rotate: -90deg;
      }

      ${Children} {
        margin: 12px 0;
      }
    `}
`;