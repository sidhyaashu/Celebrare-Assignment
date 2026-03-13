import { useReducer, useState, useMemo, useCallback, useEffect } from "react";

import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { favoritesReducer } from "../reducers/favouritesReducer";
import { loadFavorites, saveFavourites } from "../utils/localStorage";

import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { TOGGLE_FAV } from "../constant/constant";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favoritesReducer,
    [],
    loadFavorites,
  );

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  const toggleFav = useCallback((id: string) => {
    dispatch({ type: TOGGLE_FAV, payload: id });
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="mx-auto max-w-7xl p-4">
      <SearchBar value={search} onChange={handleSearch} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={favourites.includes(photo.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
}
