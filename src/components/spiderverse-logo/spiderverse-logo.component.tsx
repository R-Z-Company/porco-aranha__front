import "../../../public/spider-verse-logo.png";
import "../../../public/spider-verse-logo-large.png";
import {
  ImageSizeType,
} from "@/components/spiderverse-logo/types/image-size.type";
import useSpiderverseLogo
  from "@/components/spiderverse-logo/use-spiderverse-logo.hook";
import Image from "next/image";

interface SpiderVerseLogoProps {
  size: ImageSizeType;
}

export default function SpiderverseLogo({ size }: SpiderVerseLogoProps) {
  const { defineImageSizeToRender } = useSpiderverseLogo();

  const { src, width, height } = defineImageSizeToRender[size];

  return (
    <Image
      src={src}
      alt={"Spider-Verse Logo"}
      height={height}
      width={width}
    />
  );
}