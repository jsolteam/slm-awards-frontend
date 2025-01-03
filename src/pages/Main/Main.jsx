import { useScreenScroll } from "@hooks/useScreenScroll";
import * as Styles from "./Main.styles";
import { FaqPreview } from "./components/FaqPreview";
import { Info } from "./components/Info";
import { Preview } from "./components/Preview";
import { VotingPreview } from "./components/VotingPreview";

export const Main = () => {
  const { sectionsRef } = useScreenScroll();

  return (
    <Styles.Wrapper>
      <Preview ref={(el) => (sectionsRef.current[0] = el)} />
      <Info ref={(el) => (sectionsRef.current[1] = el)} />
      <VotingPreview ref={(el) => (sectionsRef.current[2] = el)} />
      <FaqPreview ref={(el) => (sectionsRef.current[3] = el)} />
    </Styles.Wrapper>
  );
};
