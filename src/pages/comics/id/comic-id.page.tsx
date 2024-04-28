"use client";

import ComicIdCardInfo
  from "@/pages/comics/id/components/comic-id-card-info/comic-id-card-info.component";
import CharactersSection
  from "@/components/characters-section/characters-section.component";
import useComicsIdHook from "@/pages/comics/id/use-comics-id.hook";

interface ComicsIdProps {
  id: string;
}

export default function ComicId({ id }: ComicsIdProps) {
  const { comicData, charactersData } = useComicsIdHook({ idComic: id });

  return (
    <>
      <ComicIdCardInfo comicData={comicData} />
      <CharactersSection charactersData={charactersData} />
    </>
  );
}