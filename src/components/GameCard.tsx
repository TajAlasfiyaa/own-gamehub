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
    <Card maxW={"300px"} borderRadius={12} overflow="hidden" boxShadow="2xl">
      <Image src={url} />
      <CardBody pb={53}>
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
