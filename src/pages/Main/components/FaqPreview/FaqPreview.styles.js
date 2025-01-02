import styled from "styled-components";

import faqPreview from "@assets/img/faq-preview.png";

import { SectionWrapper } from "../../Main.styles";

export const Wrapper = styled.section`
  ${SectionWrapper};

  background-image: url(${faqPreview});

  background-repeat: no-repeat;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

export const TitleValue = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  text-align: center;

  max-width: 186px;
`;

export const TitleValueBold = styled.span`
  font-weight: 700;
`;

export const TitleLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 27px;

  width: 100%;
`;
