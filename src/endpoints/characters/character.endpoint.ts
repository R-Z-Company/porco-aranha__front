import { baseEndpoint } from "@/endpoints/base.endpoint";

export const characterEndpoint = {
  findAll: `${baseEndpoint}/characters`,
  findOne: (id: string) => `${baseEndpoint}/characters/${id}`,
  findAllByIdComic: (idComic: string) => `${baseEndpoint}/characters/comic/${idComic}`,
};