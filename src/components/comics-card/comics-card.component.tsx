"use client";

import Image, { ImageProps } from "next/image";
import useNavigateToALink from "@/hooks/use-navigate-to-a-link.hook";
import { ICreatorBase } from "@/interfaces/creators/creator-base.interface";
import { Fragment } from "react";

interface ComicsCardProps {
  thumbnail: ImageProps["src"];
  creators: Pick<ICreatorBase, "name">[];
  title: string;
  id: number;
}

export default function ComicsCard({
                                     thumbnail,
                                     title,
                                     creators,
                                     id,
                                   }: ComicsCardProps) {

  const { navigateToALink } = useNavigateToALink();

  return (
    <div
      onClick={() => navigateToALink(`/comics/${id}`)}
      className={"bg-neutral-900 cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-all duration-300"}>
      <Image src={thumbnail} alt={`${title}'s cover`} width={1000} height={1000}
             className={"border-b-2 border-red-600"} />
      <div className={"p-3 flex flex-col gap-2"}>
        <h2 className={"text-gray-50 font-medium"}>{title}</h2>
        <div className={"flex gap-2 flex-wrap"}>
          {
            creators?.map(({ name }, index) => (
              <Fragment key={index}>
                {
                  index < 2 && (
                    <p
                      className={"w-fit text-slate-400 font-medium"}
                    >
                      {name}{index < 1 && ","}
                    </p>
                  )
                }
              </Fragment>

            ))
          }
        </div>
      </div>
    </div>
  );
}