import { TOGGLE_FAV } from "../constant/constant";

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Props {
  message: string;
}

export interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PhotoCardProps {
  photo: Photo;
  isFav: boolean;
  toggleFav: (id: string) => void;
}

export type FavoriteAction = { type: typeof TOGGLE_FAV; payload: string };