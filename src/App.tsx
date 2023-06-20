import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import { Genre } from "./Hooks/UseGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <div>
        <Grid
          templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
          templateColumns={{ base: "1fr", lg: "250px 1fr" }}
        >
          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
          <Show above="lg">
            <GridItem paddingX={5} area="aside">
              <GenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <PlatformSelector></PlatformSelector>
            <GameGrid selectedGenre={selectedGenre}></GameGrid>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
