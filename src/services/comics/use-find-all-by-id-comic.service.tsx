import { useCallback, useEffect, useState } from "react";
import { comicsEndpoint } from "@/endpoints/comics/comics.endpoint";
import { IFindAllComics } from "@/interfaces/comics/find-all-comics.interface";

interface useFindOneComicServiceProps {
  idComic: string;
}

export default function useFindAllByIdComicService({ idComic }: useFindOneComicServiceProps) {
  const [comicData, setComicData] = useState<IFindAllComics[]>([]);

  const findAllByIdComic = useCallback(async () => {
    const response = await fetch(comicsEndpoint.findAllByIdComic(idComic));
    const data = await response.json();
    setComicData(data);
  }, [
    idComic,
    setComicData,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    findAllByIdComic();

    return () => controller.abort();
  }, [findAllByIdComic]);

  return {
    comicData,
  };
}