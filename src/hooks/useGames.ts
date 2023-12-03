import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number;
  games_count: number;
  image_background: string;
}
// interface Platforms {
//   platform: Platform;
//   released_at: string;
//   requirements_en: null;
//   requirements_ru: null;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
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
