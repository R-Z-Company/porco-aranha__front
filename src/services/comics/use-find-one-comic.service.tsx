import { useCallback, useEffect, useState } from "react";
import { comicsEndpoint } from "@/endpoints/comics/comics.endpoint";
import {
  findOneComicDefaultValue,
} from "@/default-values/comics/find-one-character.default-value";
import { IFindOneComic } from "@/interfaces/comics/find-one-comic.interface";

interface useFindOneComicServiceProps {
  idComic: string;
}

export default function useFindOneComicService({ idComic }: useFindOneComicServiceProps) {
  const [comicData, setComicData] = useState<IFindOneComic>(findOneComicDefaultValue);

  const findOneComic = useCallback(async () => {
    const response = await fetch(comicsEndpoint.findOne(idComic));
    const data = await response.json();
    setComicData(data);
  }, [
    idComic,
    setComicData,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    findOneComic();

    return () => controller.abort();
  }, [findOneComic]);

  return {
    comicData,
  };
}