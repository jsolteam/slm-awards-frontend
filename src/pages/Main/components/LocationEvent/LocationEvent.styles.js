import styled from "styled-components";
import { SectionWrapper } from "../../Main.styles";
import { ButtonLinkStyled } from "@components/ui/Button";

export const Wrapper = styled.section`
  ${SectionWrapper};

  position: relative;

  ${ButtonLinkStyled} {
    width: 100%;
    max-width: 352px;
  }
`;

export const EmojiImage1 = styled.img`
  display: block;
`;

export const EmojiImage2 = styled.img`
  display: block;
`;
export const EmojiImage3 = styled.img`
  display: block;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  column-gap: 16px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 19.5px;
  text-align: center;
`;

export const TitleBold = styled.span`
  font-weight: 600;
`;

export const LinkTwitch = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;

  &::before {
    content: "";
    display: block;

    position: absolute;

    width: 100%;
    height: 33.81px;
    border-radius: 10px;

    rotate: 4.27deg;

    background-color: ${({ theme }) => theme.colors.bleachedCedar80};
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

    background-color: ${({ theme }) => theme.colors.darkLilac80};
  }
`;

export const Link = styled.a`
  position: relative;
  display: block;
  min-width: max-content;

  font-size: 13px;
  font-weight: 500;
  line-height: 10.4px;
  text-align: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.eminence};

  padding: 12px 44px;

  z-index: 2;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;
