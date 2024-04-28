import useFindOneCharacterService
  from "@/services/characters/use-find-one-character.service";
import useFindAllByIdComicService
  from "@/services/comics/use-find-all-by-id-comic.service";

interface useCharactersIdHookProps {
  idCharacter: string;
}

export default function useCharactersIdHook({ idCharacter }: useCharactersIdHookProps) {
  const {
    characterData,
    comidId,
  } = useFindOneCharacterService({ idCharacter });

  const { comicData } = useFindAllByIdComicService({
    idComic: comidId?.toString(),
  });

  return {
    characterData,
    comicData,
  };
}