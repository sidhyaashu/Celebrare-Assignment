import { useEffect, useState, useCallback } from "react";
import type { Photo } from "../types/type";
import { PHOTOS_API, PHOTOS_LIMIT } from "../constant/api";

interface FetchState {
  photos: Photo[];
  loading: boolean;
  error: string | null;
  loadMore: () => void;
}

export function useFetchPhotos(): FetchState {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${PHOTOS_API}?page=${page}&limit=${PHOTOS_LIMIT}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch photos");
      }

      const data: Photo[] = await res.json();

      setPhotos((prev) => [...prev, ...data]);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const loadMore = () => {
    setPage((p) => p + 1);
  };

  return { photos, loading, error, loadMore };
}