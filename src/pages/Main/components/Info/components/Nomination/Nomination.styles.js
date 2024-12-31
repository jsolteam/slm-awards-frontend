import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: 166px;

  padding: 22px 16px 35px;

  &::before {
    content: "";
    position: absolute;

    inset: 0;

    border-radius: 13px;

    padding: 2px;

    background: linear-gradient(180deg, #ffb215 0%, #996b0d 100%);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MiniLogo = styled.img`
  display: block;
  width: 61px;
  height: 55px;

  margin-bottom: 21px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.viaoda};

  font-size: 16px;
  font-weight: 400;
  line-height: 22.58px;

  text-align: center;

  text-transform: uppercase;

  background-image: linear-gradient(180deg, #ffb215 0%, #ffe9bc 81.6%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  margin-bottom: 21px;
`;
export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12.19px;
  text-align: center;
`;
