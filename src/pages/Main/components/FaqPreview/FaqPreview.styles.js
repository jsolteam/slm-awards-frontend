import styled from "styled-components";

import faqPreview from "@assets/img/faq-preview.png";

import { Category, SectionWrapper } from "../../Main.styles";

export const Wrapper = styled.section`
  ${SectionWrapper};

  justify-content: space-between;

  background-image: url(${faqPreview});

  background-repeat: no-repeat;

  row-gap: 117px;

  padding-top: 16px;
`;

export const NewsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 19px;
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

  text-transform: uppercase;

  max-width: 215px;
`;

export const TitleValueBold = styled.span`
  font-weight: 700;
`;

export const TitleLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const QuestionsWrapper = styled.div`
  width: 100%;

  ${Category} {
    margin-bottom: 45px;
  }
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 27px;

  width: 100%;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  row-gap: 117px;
`;

export const Footer = styled.footer`
  height: 43px;
`;
export const FooterCompany = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 12.19px;
  text-align: center;

  color: ${({ theme }) => theme.colors.martini};
`;
export const FooterTeam = styled.p`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  line-height: 12.19px;
  text-align: center;

  color: ${({ theme }) => theme.colors.smokeyGrey};
`;
