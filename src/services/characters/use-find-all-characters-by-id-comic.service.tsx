import { useCallback, useEffect, useState } from "react";
import { characterEndpoint } from "@/endpoints/characters/character.endpoint";
import {
  IFindAllCharacters,
} from "@/interfaces/characters/find-all-characters.interface";

interface UseFindOneCharacterByIdComicServiceProps {
  idComic: string;
}

export default function useFindAllCharactersByIdComicService({
                                                               idComic,
                                                             }: UseFindOneCharacterByIdComicServiceProps) {
  const [charactersData, setCharactersData] = useState<IFindAllCharacters[]>([]);

  const findOneCharacterByIdComic = useCallback(async () => {
    const response = await fetch(characterEndpoint.findAllByIdComic(idComic));
    const data = await response.json();

    setCharactersData(data);
  }, [
    idComic,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    findOneCharacterByIdComic();

    return () => controller.abort();
  }, [
    findOneCharacterByIdComic,
  ]);


  return {
    charactersData,
  };
}