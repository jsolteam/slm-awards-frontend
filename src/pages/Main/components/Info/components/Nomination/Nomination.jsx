import MinLogo from "@assets/img/mini-logo.png";

import * as Styles from "./Nomination.styles";

export const Nomination = ({ title, subtitle }) => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.MiniLogo src={MinLogo} />
        <Styles.Title>{title}</Styles.Title>
        <Styles.Subtitle>{subtitle}</Styles.Subtitle>
      </Styles.Content>
    </Styles.Wrapper>
  );
};
