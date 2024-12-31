import { useEffect, useRef, useState } from "react";
import * as Styles from "./Sidebar.styles";

export const Sidebar = ({ children }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      setWidth(() => current.offsetWidth);
    }
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.WrapperContent>
        <Styles.Content ref={ref} $width={width}>
          {children}
        </Styles.Content>
        <Styles.Content aria-hidden={true} $width={width}>
          {children}
        </Styles.Content>
      </Styles.WrapperContent>
    </Styles.Wrapper>
  );
};
