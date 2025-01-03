import * as Styles from "./Main.styles";
import { FaqPreview } from "./components/FaqPreview";
import { Info } from "./components/Info";
import { Preview } from "./components/Preview";
import { VotingPreview } from "./components/VotingPreview";

export const Main = () => {
  return (
    <Styles.Wrapper>
      {/* <Preview />
      <Info />
      <VotingPreview /> */}
      <FaqPreview />
    </Styles.Wrapper>
  );
};
