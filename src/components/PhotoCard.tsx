import { memo } from "react";
import type { PhotoCardProps } from "../types/type";

function PhotoCard({ photo, isFav, toggleFav }: PhotoCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-sm">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="h-48 w-full object-cover"
      />

      <div className="flex items-center justify-between p-3">
        <p className="text-sm font-medium">{photo.author}</p>

        <button onClick={() => toggleFav(photo.id)} className="text-xl cursor-pointer">
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}


export default memo(PhotoCard);