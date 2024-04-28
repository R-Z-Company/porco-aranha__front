"use client";

import Image, { ImageProps } from "next/image";
import MilesMoralesLogo from "../../../public/miles-morales-logo.svg";
import useNavigateToALink from "@/hooks/use-navigate-to-a-link.hook";

interface CharactersCardProps {
  thumbnail: ImageProps["src"];
  fullName: string;
  id: number;
}

export default function CharactersCard({
                                         id,
                                         thumbnail,
                                         fullName,
                                       }: CharactersCardProps) {

  const { navigateToALink } = useNavigateToALink();

  return (
    <div
      onClick={() => navigateToALink(`/characters/${id}`)}
      className={"group cursor-pointer flex bg-neutral-900 rounded-md overflow-hidden transition-all hover:bg-red-600"}>
      <div
        className={"border-r-2 border-red-600 group-hover:scale-110"}>
        <Image
          src={thumbnail}
          alt={`${fullName} picture`}
          width={100}
          height={100}
        />
      </div>

      <div className={"relative px-3 flex items-center w-full"}>
        <Image
          src={MilesMoralesLogo}
          alt={"Miles-Morales Logo"}
          className={"absolute right-0 bottom-0"}
        />

        <p className={"font-medium text-gray-50 z-10"}>
          {fullName}
        </p>
      </div>
    </div>
  );
}

