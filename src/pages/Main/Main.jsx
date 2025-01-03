import * as Styles from "./Main.styles";
import { Info } from "./components/Info";
import { Preview } from "./components/Preview";
import { VotingPreview } from "./components/VotingPreview";

export const Main = () => {

  return (
    <Styles.Wrapper>
      <Preview />
      <Info />
      <VotingPreview />
      {/* <Voting ref={(el) => (sectionsRef.current[4] = el)}  />
      <FaqPreview ref={(el) => (sectionsRef.current[5] = el)}  />  */}
    </Styles.Wrapper>
  );
};
