import { useEffect, useRef, useState } from "react";
import * as Styles from "./Sidebar.styles";

export const SidebarHandle = ({ children }) => {
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
        <Styles.ContentSidebarHandle ref={ref} $width={width}>
          {children}
        </Styles.ContentSidebarHandle>
        <Styles.ContentSidebarHandle aria-hidden={true} $width={width}>
          {children}
        </Styles.ContentSidebarHandle>
      </Styles.WrapperContent>
    </Styles.Wrapper>
  );
};
