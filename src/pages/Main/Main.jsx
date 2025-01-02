import { useResizeListener } from "@hooks/useResizeListener";
import { useScreenScroll } from "@hooks/useScreenScroll";

import { Info } from "./components/Info";
import { LocationEvent } from "./components/LocationEvent";
import { Preview } from "./components/Preview";
import { VotingPreview } from "./components/VotingPreview";

import * as Styles from "./Main.styles";
import { Voting } from "./components/Voting/Voting";
import { FaqPreview } from "./components/FaqPreview";

export const Main = () => {
  const { height } = useResizeListener();

  const { sectionsRef } = useScreenScroll();

  return (
    <Styles.Wrapper>
      <Preview ref={(el) => (sectionsRef.current[0] = el)} height={height} />
      <Info ref={(el) => (sectionsRef.current[1] = el)} height={height} />
      <LocationEvent
        ref={(el) => (sectionsRef.current[2] = el)}
        height={height}
      />
      <VotingPreview
        ref={(el) => (sectionsRef.current[3] = el)}
        height={height}
      />
      <Voting ref={(el) => (sectionsRef.current[4] = el)} height={height} />
      <FaqPreview ref={(el) => (sectionsRef.current[5] = el)} height={height} />
    </Styles.Wrapper>
  );
};
