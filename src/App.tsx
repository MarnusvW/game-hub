import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

function App() {
  return (
    <>
      <div>
        <Grid
          templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
          templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        >
          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
          <Show above="lg">
            <GridItem paddingX={5} area="aside">
              <GenreList></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid></GameGrid>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
