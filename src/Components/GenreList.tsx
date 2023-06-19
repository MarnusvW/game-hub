import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/UseGenres";
import getCroppedImageUrl from "../Services/Image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      <List>
        {error && <p>{error}</p>}
        {data.map((genre) => (
          <ListItem paddingY={1.5} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
