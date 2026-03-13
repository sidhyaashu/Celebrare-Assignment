import { FAVORITES } from "../constant/constant";

export function loadFavorites(): string[] {
  try {
    const data = localStorage.getItem(FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}


export function saveFavourites(favs: string[]) {
  localStorage.setItem(FAVORITES, JSON.stringify(favs))
}