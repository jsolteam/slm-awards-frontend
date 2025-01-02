import slmNewsFaq from "@assets/img/slm-news-faq.png";

import * as Styles from "./FaqPreview.styles";
import { forwardRef } from "react";

export const FaqPreview = forwardRef(({ height }, ref) => (
  <Styles.Wrapper ref={ref} $height={height}>
    <Styles.TitleWrapper>
      <Styles.TitleValue>
        Следите за последними новостями о премии только в{" "}
        <Styles.TitleValueBold>SLM News</Styles.TitleValueBold>
      </Styles.TitleValue>
      <Styles.TitleLogo src={slmNewsFaq} />
    </Styles.TitleWrapper>
  </Styles.Wrapper>
));

FaqPreview.displayName = "FaqPreview";
