import { useState } from "react";
import * as Styles from "./HiddenText.styles";

export const HiddenText = ({ title, children }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Styles.Wrapper $isShow={isShow}>
      <Styles.TitleWrapper>
        <Styles.Title onClick={() => setIsShow(!isShow)}>{title}</Styles.Title>
        <Styles.ArrowIcon />
      </Styles.TitleWrapper>

      {isShow && <Styles.Children>{children}</Styles.Children>}
    </Styles.Wrapper>
  );
};
