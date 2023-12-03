import useData from "./useData";

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

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("games");

export default useGames;
