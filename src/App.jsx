import { ThemeProvider } from "styled-components";
import { Main } from "./pages/Main";
import { theme } from "./styles/themes";
import { Container } from "./styles/mixins/Container";
import { GlabalStyleWrapper } from "./styles/GlabalStyleWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlabalStyleWrapper />
      <Container>
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
