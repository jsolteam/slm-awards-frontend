import styled from "styled-components";
import { SectionWrapper } from "../../Main.styles";
import CleverBottom from "@assets/img/clever-bottom.png";
import Perdezh from "@assets/img/perdezh.png";
import { ButtonLinkStyled } from "@components/ui/Button";

export const Wrapper = styled.section`
  ${SectionWrapper};

  justify-content: flex-start;

  padding: 0;

  background-image: url(${CleverBottom});

  background-repeat: no-repeat;
  background-position: top right;

  padding-bottom: 9px;
`;

export const Info = styled.div`
  display: flex;

  flex-direction: column;

  flex: 1;

  padding: 110px 0 0;

  width: 100%;

  margin-bottom: 96px;
`;

export const SubtitleBold = styled.span`
  font-weight: 800;
`;
export const Subtitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  text-align: center;

  text-transform: uppercase;

  padding: 0 24px;

  margin-bottom: 56px;
`;

export const SidebarWrapper = styled.div`
  width: 100%;

  background-image: url(${Perdezh});

  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

export const LocationEvent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 36px;

  width: 100%;

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
