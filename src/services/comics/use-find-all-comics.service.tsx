import { useCallback, useEffect, useState } from "react";
import { comicsEndpoint } from "@/endpoints/comics/comics.endpoint";
import { IFindAllComics } from "@/interfaces/comics/find-all-comics.interface";

export default function useFindAllComicsService() {
  const [comicsData, setComicsData] = useState<IFindAllComics[]>([]);

  const findAllComics = useCallback(async () => {
    const response = await fetch(comicsEndpoint.findAll);
    const data = await response.json();
    setComicsData(data);
  }, [
    setComicsData,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    findAllComics();

    return () => controller.abort();
  }, [findAllComics]);

  return {
    comicsData,
  };
}