import styled from "styled-components";
import { Category, SectionWrapper } from "../../Main.styles";

export const Wrapper = styled.section`
  ${SectionWrapper};
`;

export const TextWrapper = styled.div`
  ${Category} {
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12.19px;
  text-align: center;
`;
