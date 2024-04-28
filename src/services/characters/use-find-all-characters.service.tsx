import { useCallback, useEffect, useState } from "react";
import { characterEndpoint } from "@/endpoints/characters/character.endpoint";
import {
  IFindAllCharacters,
} from "@/interfaces/characters/find-all-characters.interface";

export default function useFindAllCharactersService() {
  const [charactersData, setCharactersData] = useState<IFindAllCharacters[]>([]);

  const findAllCharacters = useCallback(async () => {
    const response = await fetch(characterEndpoint.findAll);
    const data = await response.json();
    setCharactersData(data);
  }, [
    setCharactersData,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    findAllCharacters();

    return () => controller.abort();
  }, [findAllCharacters]);

  return {
    charactersData,
  };
}