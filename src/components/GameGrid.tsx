import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, erorr, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {erorr && <Text>{erorr}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading && skeleton.map((s) => <GameCardSkeleton key={s} />)}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
