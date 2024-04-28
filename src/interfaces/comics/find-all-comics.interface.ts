import { IComicsBase } from "@/interfaces/comics/comics-base.interface";
import { ICreatorBase } from "@/interfaces/creators/creator-base.interface";

export interface IFindAllComics extends Pick<IComicsBase, "id" | "title" | "thumbnail"> {
  creators: Pick<ICreatorBase, "name">[];
}