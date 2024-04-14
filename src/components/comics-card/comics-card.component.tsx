"use client";

import Image, { ImageProps } from "next/image";
import useNavigateToALink from "@/hooks/use-navigate-to-a-link.hook";

interface ComicsCardProps {
  src: ImageProps["src"];
  creators: string[];
  title: string;
  id: number;
}

export default function ComicsCard({
                                     src,
                                     title,
                                     creators,
                                     id,
                                   }: ComicsCardProps) {

  const { navigateToALink } = useNavigateToALink();

  return (
    <div
      onClick={() => navigateToALink(`/${id}`)}
      className={"bg-neutral-900 cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-all duration-300"}>
      <Image src={src} alt={``} width={1000} height={1000}
             className={"border-b-2 border-red-600"} />
      <div className={"p-3 flex flex-col gap-2"}>
        <h2 className={"text-gray-50 font-medium"}>{title}</h2>
        <div className={"flex gap-2"}>
          {
            creators.map((creator, index) => (
              <p
                key={index}
                className={"text-slate-400 font-medium"}
              >
                {creator}{index < creators.length - 1 && ","}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}