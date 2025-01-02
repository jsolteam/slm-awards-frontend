import styled, { css } from "styled-components";
import { ButtonStyle, ButtonVariant } from "./Button.constants";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
`;

export const Children = styled.div`
  position: relative;
  display: block;
  min-width: max-content;

  border-radius: 10px;

  z-index: 2;
`;

const ButtonStyles = {
  [ButtonStyle.beer]: css`
    ${Wrapper} {
      &::before {
        background-color: ${({ theme }) => theme.colors.sandyTaupe80};
      }

      &::after {
        background-color: ${({ theme }) => theme.colors.arylideYellow80};
      }
    }

    ${Children} {
      background-color: ${({ theme }) => theme.colors.beer};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  [ButtonStyle.white]: css`
    ${Wrapper} {
      &::before {
        background-color: ${({ theme }) => theme.colors.silverSand80};
      }

      &::after {
        background-color: ${({ theme }) => theme.colors.boulder80};
      }
    }

    ${Children} {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }
  `,
  [ButtonStyle.eminence]: css`
    ${Wrapper} {
      &::before {
        background-color: ${({ theme }) => theme.colors.bleachedCedar80};
      }

      &::after {
        background-color: ${({ theme }) => theme.colors.darkLilac80};
      }
    }

    ${Children} {
      background-color: ${({ theme }) => theme.colors.eminence};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
    [ButtonStyle.irishGreen]: css`
    ${Wrapper} {
      &::before {
        background-color: ${({ theme }) => theme.colors.mediumGreen80};
      }

      &::after {
        background-color: ${({ theme }) => theme.colors.deepGreen80};
      }
    }

    ${Children} {
      background-color: ${({ theme }) => theme.colors.irishGreen};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

const ButtonVariants = {
  [ButtonVariant.small]: css`
    ${Children} {
      font-size: 13px;
      font-weight: 500;
      line-height: 10.4px;
      text-align: center;

      padding: 12px 16px;
    }

    ${Wrapper} {
      &::before {
        content: "";
        display: block;

        position: absolute;

        width: 100%;
        height: 33.81px;
        border-radius: 10px;

        rotate: 4.27deg;
      }

      &::after {
        content: "";
        display: block;

        position: absolute;

        top: 0;

        width: 100%;
        height: 33.81px;
        border-radius: 10px;
        rotate: -2.21deg;
      }
    }
  `,
  [ButtonVariant.medium]: css`
    ${Children} {
      font-size: 14px;
      font-weight: 700;
      line-height: 11.2px;
      text-align: center;

      padding: 20px 16px;
    }

    ${Wrapper} {
      &::before {
        content: "";
        display: block;

        position: absolute;

        width: 100%;
        height: 51.89px;
        border-radius: 10px;

        rotate: 3.13deg;
      }

      &::after {
        content: "";
        display: block;

        position: absolute;

        top: 0;

        width: 100%;
        height: 51.89px;
        border-radius: 10px;
        rotate: -1.62deg;
      }
    }
  `,
};

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;

  ${({ $style }) => ButtonStyles[$style]}
  ${({ $variant }) => ButtonVariants[$variant]}
`;

export const ButtonLink = styled.a`
  border: none;
  outline: none;
  background: none;

  ${({ $style }) => ButtonStyles[$style]}
  ${({ $variant }) => ButtonVariants[$variant]}
`;
