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
  const { photos, loading, error, loadMore } = useFetchPhotos();

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
    const query = search.trim().toLowerCase();
    if (!query) return photos;
    return photos.filter((photo) => photo.author.toLowerCase().includes(query));
  }, [photos, search]);

  const toggleFav = useCallback((id: string) => {
    dispatch({ type: TOGGLE_FAV, payload: id });
  }, []);

  if (loading && photos.length === 0) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="w-full">
      <SearchBar value={search} onChange={handleSearch} />

      {filteredPhotos.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2.5 py-16 text-center">
          <span className="text-5xl">🔍</span>
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            No photos found
          </p>
          <p className="text-sm text-gray-500">Try a different author name.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFav={favourites.includes(photo.id)}
              toggleFav={toggleFav}
            />
          ))}
        </div>
      )}

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button
          onClick={loadMore}
          disabled={loading}
          aria-label="Load more photos"
          className="flex items-center gap-2 px-8 py-2.5 text-sm font-semibold text-violet-600 bg-violet-50 border border-violet-200 rounded-xl cursor-pointer transition-all duration-150 hover:bg-violet-100 hover:-translate-y-px active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed dark:text-violet-400 dark:bg-violet-900/20 dark:border-violet-700 dark:hover:bg-violet-900/30"
        >
          {loading ? (
            <>
              <span className="w-3.5 h-3.5 rounded-full border-2 border-violet-300 border-t-violet-600 animate-spin" />
              Loading…
            </>
          ) : (
            "Load More"
          )}
        </button>
      </div>
    </div>
  );
}
