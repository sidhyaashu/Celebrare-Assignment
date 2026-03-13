import { TOGGLE_FAV } from "../constant/constant";
import type { FavoriteAction } from "../types/type";

export function favoritesReducer(
  state: string[],
  action: FavoriteAction,
): string[] {
  switch (action.type) {
    case TOGGLE_FAV:
      const exists = state.includes(action.payload);

      if (exists) {
        return state.filter((id) => id !== action.payload);
      }

      return [...state, action.payload];
    default:
      return state;
  }
}
