import { memo } from "react";
import type { PhotoCardProps } from "../types/type";

function PhotoCard({ photo, isFav, toggleFav }: PhotoCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col dark:border-gray-700 dark:bg-gray-900">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={photo.download_url}
          alt={photo.author}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isFav && (
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center text-xs pointer-events-none">
            ❤️
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-gray-100 dark:border-gray-700/60">
        <p
          title={photo.author}
          className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate flex-1"
        >
          {photo.author}
        </p>

        <button
          aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
          title={isFav ? "Remove from favourites" : "Add to favourites"}
          onClick={() => toggleFav(photo.id)}
          className={`shrink-0 px-2.5 py-1.5 rounded-lg border text-base leading-none cursor-pointer transition-all duration-150 hover:scale-110 active:scale-95 ${
            isFav
              ? "bg-violet-50 border-violet-300 dark:bg-violet-900/30 dark:border-violet-600"
              : "bg-transparent border-gray-200 dark:border-gray-600"
          }`}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default memo(PhotoCard);