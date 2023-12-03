import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

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
  const [erorr, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contorler = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("games", { signal: contorler.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contorler.abort();
  }, []);
  return { games, erorr, isLoading };
};

export default useGames;
