import {
  ICharactersBase,
} from "@/interfaces/characters/characters-base.interface";

export interface IFindAllCharacters
  extends Pick<ICharactersBase, "id" | "fullName" | "thumbnail"> {
}
