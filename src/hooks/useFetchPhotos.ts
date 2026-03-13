import { useEffect, useState } from "react";
import type { Photo } from "../types/type";

interface FetchState {
  photos: Photo[];
  loading: boolean;
  error: string | null;
}

const API_URL = "https://picsum.photos/v2/list?limit=30";

export function useFetchPhotos(): FetchState {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPhotos = async () => {
      try {
      const res = await fetch(API_URL, {
        signal: controller.signal
      });

        if (!res.ok) {
          throw new Error("Failed to fetch photos...!!");
        }

        const data: Photo[] = await res.json();

        setPhotos(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
