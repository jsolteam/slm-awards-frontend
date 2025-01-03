import { CountNum } from "../Icons";
import * as Styles from "./Counter.styles";

export const Counter = ({ current, order = [] }) => (
  <Styles.Wrapper>
    <Styles.Content>
      {order.map((el, index) => (
        <CountNum key={el} isFill={current === index} />
      ))}
    </Styles.Content>
  </Styles.Wrapper>
);
