import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CritickScore from "./CritickScore";
import getCroppedImageUrl from "../service/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const url = getCroppedImageUrl(game.background_image);
  return (
    <Card h={"100%"}>
      <Image src={url} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms} />
          <CritickScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
