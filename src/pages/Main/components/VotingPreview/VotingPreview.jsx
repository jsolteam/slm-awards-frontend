import { forwardRef } from "react";

import * as Styles from "./VotingPreview.styles";
import * as MainStyles from "../../Main.styles";

export const VotingPreview = forwardRef(({ height }, ref) => {
  return (
    <Styles.Wrapper ref={ref} $height={height}>
      <Styles.TextWrapper>
        <MainStyles.Category>голосование</MainStyles.Category>
        <Styles.Subtitle>
          Для учета голоса, нужно проголосовать во всех номинациях
        </Styles.Subtitle>
      </Styles.TextWrapper>
    </Styles.Wrapper>
  );
});

VotingPreview.displayName = "VotingPreview";
