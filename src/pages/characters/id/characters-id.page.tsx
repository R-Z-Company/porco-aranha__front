"use client";

import CharacterInfoCard
  from "@/pages/characters/id/components/character-info-card.component";
import ComicsSection
  from "@/components/comics-section/comics-section.component";
import useCharactersIdHook from "@/pages/characters/id/use-characters-id.hook";

interface CharactersIdProps {
  id: string;
}

export default function CharactersId({ id }: CharactersIdProps) {
  const { characterData, comicData } = useCharactersIdHook({
    idCharacter: id,
  });

  return <>
    <CharacterInfoCard characterInfo={characterData} />
    <ComicsSection comicsData={comicData} />
  </>;
}