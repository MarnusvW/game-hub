import { Game } from "../Hooks/UseGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/Image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  const color = colorMode !== "dark" ? "gray.300" : "gray.700";

  return (
    <Card background={color}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="3xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
