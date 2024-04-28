"use client";

import MainBannerBackgroundImage
  from "../../../../../public/miles-morales-background-banner.jpg";
import {
  SpiderVerseSummaryText,
} from "@/pages/home/components/main-banner/texts/spider-verse-summary.text";
import SpiderverseLogo
  from "@/components/spiderverse-logo/spiderverse-logo.component";
import { Button } from "@/components/button";
import useNavigateToALink from "@/hooks/use-navigate-to-a-link.hook";
import Image from "next/image";

export default function MainBanner() {

  const { navigateToALink } = useNavigateToALink();

  return (
    <div className={"relative flex flex-col h-screen"}>
      <Image
        src={MainBannerBackgroundImage}
        alt={"Miles Morales Background Image"}
        className={"w-full h-screen object-cover left-0 top-0"}
        priority
      />

      <div
        className={"absolute left-4 bottom-10 sm:left-32 sm:bottom-24 w-1/2 flex flex-col items-center gap-8 z-10"}
      >
        <SpiderverseLogo size={"large"} />
        <p className={"text-gray-100"}>{SpiderVerseSummaryText}</p>
        <Button.Wrapper
          hierarchy={"filled"}
          onClick={() => navigateToALink("#characters")}
        >
          See more!
        </Button.Wrapper>
      </div>
    </div>
  );
}