import useFindAllCharactersService
  from "@/services/characters/use-find-all-characters.service";
import useFindAllComicsService
  from "@/services/comics/use-find-all-comics.service";

export default function useHomeHook() {
  const { charactersData } = useFindAllCharactersService();
  const { comicsData } = useFindAllComicsService();

  return {
    charactersData,
    comicsData,
  };
}