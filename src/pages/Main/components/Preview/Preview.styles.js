import styled from "styled-components";
import { SectionWrapper } from "../../Main.styles";

import CleverTop from "@assets/img/clever-top.png";

export const Wrapper = styled.section`
  ${SectionWrapper};

  position: relative;

  background-image: url(${CleverTop});

  background-repeat: no-repeat;
  background-position: bottom right;

  overflow: hidden;

`;

export const Line = styled.div`
  position: absolute;

  width: 2px; /* Ширина линии */
  height: ${({ $position }) => `calc(40% + (${Math.abs(5 * $position)}px))`};
  left: ${({ $index }) => `calc(20px*${$index})`};
  top: 0;

  z-index: -1;

  background: linear-gradient(180deg, #ffd700 0%, rgba(255, 215, 0, 0) 100%);
`;
export const TitleWrapper = styled.div`
  width: 100%;
`;

export const Logo = styled.img`
  display: block;

  width: 302px;
  height: 289px;

  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.viaoda};

  font-size: 32px;
  font-weight: 400;
  line-height: 45.15px;
  text-align: center;

  text-transform: uppercase;
`;

export const Support = styled.div``;

export const SupportTitle = styled.p`
  color: ${({ theme }) => theme.colors.beer};

  margin-bottom: 16px;

  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  text-align: center;

  text-transform: uppercase;
`;

export const SupportPartners = styled.div`
  display: flex;

  justify-content: center;

  column-gap: 16px;
`;

export const SupportLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 8px 0px 0px 0px;
`;
