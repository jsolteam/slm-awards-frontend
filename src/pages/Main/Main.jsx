import { useScreenScroll } from "@hooks/useScreenScroll";

import { Info } from "./components/Info";
import { Preview } from "./components/Preview";

import * as Styles from "./Main.styles";
import { MAIN_ID_SECTIONS } from "./Main.constants";

export const Main = () => {
  const { sectionsRef } = useScreenScroll();

  return (
    <Styles.Wrapper>
      <Preview
        id={MAIN_ID_SECTIONS.preview}
        ref={(el) => (sectionsRef.current[0] = el)}
      />
      <Info
        id={MAIN_ID_SECTIONS.informationAboutTheAward}
        ref={(el) => (sectionsRef.current[1] = el)}
      />
      {/* <VotingPreview
        ref={(el) => (sectionsRef.current[3] = el)}
      />
      <Voting ref={(el) => (sectionsRef.current[4] = el)}  />
      <FaqPreview ref={(el) => (sectionsRef.current[5] = el)}  />  */}
    </Styles.Wrapper>
  );
};
