import styled from "styled-components";

export const Nominated = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 18px;
`;

export const Wrapper = styled.div`
  position: relative;

  width: 166px;

  padding: 22px 16px 26px;

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

  width: 111.74px;
  height: 111.74px;

  margin-bottom: 21px;
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 15.85px;
  text-align: center;
  text-transform: uppercase;

  border: 2px solid;

  background-image: linear-gradient(180deg, #ffb215 0%, #ffe9bc 81.6%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  margin-bottom: 21px;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const LinkValue = styled.div`
  font-size: 7px;
  font-weight: 400;
  line-height: 8.53px;
  text-align: center;
`;
