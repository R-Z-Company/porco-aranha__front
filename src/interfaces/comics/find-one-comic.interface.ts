import { IComicsBase } from "@/interfaces/comics/comics-base.interface";
import { ICreatorBase } from "@/interfaces/creators/creator-base.interface";

export interface IFindOneComic extends IComicsBase {
  creators: Omit<ICreatorBase, "idComic">[];
}