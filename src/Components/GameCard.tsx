import { Game } from "../Hooks/UseGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="3xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
