import useFindOneComicService
  from "@/services/comics/use-find-one-comic.service";
import useFindAllCharactersByIdComicService
  from "@/services/characters/use-find-all-characters-by-id-comic.service";

interface useComicsIdHookProps {
  idComic: string;
}

export default function useComicsIdHook({ idComic }: useComicsIdHookProps) {
  const { comicData } = useFindOneComicService({ idComic });
  const { charactersData } = useFindAllCharactersByIdComicService({ idComic });

  return {
    comicData,
    charactersData,
  };
}