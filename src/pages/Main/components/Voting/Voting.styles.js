import styled from "styled-components";
import { SectionWrapper } from "../../Main.styles";

export const Wrapper = styled.section`
  ${SectionWrapper};
  padding: 0;
`;

export const TitleWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.viaoda};
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 56.44px;
  text-align: center;

  text-transform: uppercase;

  background-image: linear-gradient(180deg, #ffb215 0%, #ffe9bc 81.6%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.93px;
  text-align: center;
  text-transform: uppercase;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  min-height: 335px;

  padding-top: 59px;
`;
