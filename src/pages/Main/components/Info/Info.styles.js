import styled from "styled-components";
import { SectionWrapper } from "../../Main.styles";
import CleverBottom from "@assets/img/clever-bottom.png";
import Perdezh from "@assets/img/perdezh.png";

export const Wrapper = styled.section`
  ${SectionWrapper};
  padding: 0;

  background-image: url(${CleverBottom});

  background-repeat: no-repeat;
  background-position: top right;
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

  padding: 0 16px;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  min-height: 335px;

  padding-top: 59px;

  background-image: url(${Perdezh});

  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;
