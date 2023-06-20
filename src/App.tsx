import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import { Genre } from "./Hooks/UseGenres";
import { Platform } from "./Hooks/UseGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <HStack spacing={5} paddingLeft={2} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                SortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
            <GameGrid gameQuery={gameQuery}></GameGrid>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
