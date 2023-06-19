import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div>
        <Grid
          templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        >
          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;