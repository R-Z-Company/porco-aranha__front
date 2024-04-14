"use client";

import Image from "next/image";
import MainBannerBackgroundImage
  from "../../../../../public/miles-morales-background-banner.jpg";
import {
  SpiderVerseSummaryText,
} from "@/pages/home/components/main-banner/texts/spider-verse-summary.text";
import SpiderverseLogo
  from "@/components/spiderverse-logo/spiderverse-logo.component";
import { Button } from "@/components/button";
import useNavigateToALink from "@/hooks/use-navigate-to-a-link.hook";

export default function MainBanner() {

  const { navigateToALink } = useNavigateToALink();

  return (
    <>
      <Image
        src={MainBannerBackgroundImage}
        alt={"Miles Morales Background Image"}
        className={"w-full h-auto object-cover absolute left-0 top-0"}
      />

      <div
        className={"absolute left-32 bottom-32 w-1/2 flex flex-col items-center gap-8"}>
        <SpiderverseLogo size={"large"} />
        <p className={"text-gray-100"}>{SpiderVerseSummaryText}</p>
        <Button.Wrapper
          hierarchy={"filled"}
          onClick={() => navigateToALink("#characters")}
        >
          See more!
        </Button.Wrapper>
      </div>
    </>
  );
}