import { ButtonStyle, ButtonVariant } from "./Button.constants";
import * as Styles from "./Button.styles";

export const Button = ({
  children,
  variant = ButtonVariant.small,
  style = ButtonStyle.beer,
}) => (
  <Styles.Button $variant={variant} $style={style}>
    <Styles.Wrapper>
      <Styles.Children>{children}</Styles.Children>
    </Styles.Wrapper>
  </Styles.Button>
);
