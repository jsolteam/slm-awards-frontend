import styled from "styled-components";
import { Category, SectionWrapper } from "../../Main.styles";
import { ButtonStyled } from "@components/ui/Button";
import { CounterStyled } from "@components/ui/Counter";

export const Wrapper = styled.section`
  ${SectionWrapper};

  justify-content: center;

  padding: 35px 0 9px;
`;

export const Voting = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 80px;
`;

export const TextWrapper = styled.div`
  margin-bottom: 143px;

  ${Category} {
    margin-bottom: 6px;
  }
`;

export const Description = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12.19px;
  text-align: center;
`;

export const SwitchingVoting = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: 32px;

  ${CounterStyled} {
    margin-bottom: 35px;
  }
`;

export const TitleWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.viaoda};

  margin-bottom: 31px;
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 46.44px;
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

  min-height: 286.85px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 25px;

  width: 100%;
  max-width: 352px;

  ${ButtonStyled} {
    width: 100%;
  }
`;
