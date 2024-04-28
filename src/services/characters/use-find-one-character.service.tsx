import { useCallback, useEffect, useState } from "react";
import { characterEndpoint } from "@/endpoints/characters/character.endpoint";
import {
  IFindOneCharacter,
} from "@/interfaces/characters/find-one-character.interface";
import {
  findOneCharacterDefaultValue,
} from "@/default-values/characters/find-one-character.default-value";

interface useFindOneCharacterServiceProps {
  idCharacter: string;
}

export default function useFindOneCharacterService({ idCharacter }: useFindOneCharacterServiceProps) {

  const [characterData, setCharacterData] =
    useState<IFindOneCharacter>(findOneCharacterDefaultValue);
  const [comidId, setComicId] =
    useState<IFindOneCharacter["idComic"]>(0);

  const findOneCharacter = useCallback(async () => {
    if (!idCharacter) return;

    const response = await fetch(characterEndpoint.findOne(idCharacter));
    const data: IFindOneCharacter = await response.json();
    setCharacterData(data);
    setComicId(data.idComic);
  }, [idCharacter]);

  useEffect(() => {
    const controller = new AbortController();

    findOneCharacter();

    return () => controller.abort();
  }, [findOneCharacter]);

  return {
    characterData,
    comidId,
  };
}