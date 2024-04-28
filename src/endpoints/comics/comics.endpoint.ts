import { baseEndpoint } from "@/endpoints/base.endpoint";

export const comicsEndpoint = {
  findAll: `${baseEndpoint}/comics`,
  findOne: (id: string) => `${baseEndpoint}/comics/${id}`,
  findAllByIdComic: (idComic: string) => `${baseEndpoint}/comics/all/${idComic}`,
};