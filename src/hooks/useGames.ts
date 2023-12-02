import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGameResponse {
  counrt: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [erorr, setErorr] = useState();
  const [lodding, setLodding] = useState(false);

  useEffect(() => {
    const contorler = new AbortController();
    setLodding(true);
    apiClient
      .get<FetchGameResponse>("games", { signal: contorler.signal })
      .then((game) => {
        setGames(game.data.results);
      })
      .catch((err) => {
        err.message !== "canceled"
          ? setErorr(err.message)
          : console.log(err.message);
      })
      .finally(() => setLodding(false));

    return () => contorler.abort();
  }, []);
  return { games, erorr, lodding };
};

export default useGames;
