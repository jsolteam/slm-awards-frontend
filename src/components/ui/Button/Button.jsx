import { ButtonStyle, ButtonType, ButtonVariant } from "./Button.constants";
import * as Styles from "./Button.styles";

export const Button = ({
  children,
  variant = ButtonVariant.small,
  style = ButtonStyle.beer,
  type = ButtonType.button,
  onClick,
  disabled,
}) => {
  if (type === ButtonType.link) {
    return (
      <Styles.ButtonLink $variant={variant} $style={style} type="button">
        <Styles.Wrapper>
          <Styles.Children>{children}</Styles.Children>
        </Styles.Wrapper>
      </Styles.ButtonLink>
    );
  }

  return (
    <Styles.Button
      $variant={variant}
      $style={style}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <Styles.Wrapper>
        <Styles.Children>{children}</Styles.Children>
      </Styles.Wrapper>
    </Styles.Button>
  );
};
