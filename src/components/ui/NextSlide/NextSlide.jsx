import { Arrow } from "../Icons";
import * as Styles from "./NextSlide.styles";

export const NextSlide = ({ children }) => (
  <Styles.NextSlide>
    <Styles.Value>{children}</Styles.Value>
    <Arrow />
  </Styles.NextSlide>
);
