import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { Container } from "./styles/mixins/Container";
import { GlabalStyleWrapper } from "./styles/GlabalStyleWrapper";
import { MainRoute } from "./route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlabalStyleWrapper />
      <Container>
        <MainRoute />
      </Container>
    </ThemeProvider>
  );
}

export default App;
