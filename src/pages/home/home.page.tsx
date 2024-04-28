"use client";

import CharactersSection
  from "@/components/characters-section/characters-section.component";
import MainBanner from "./components/main-banner/main-banner.component";
import ComicsSection
  from "@/components/comics-section/comics-section.component";
import useHomeHook from "@/pages/home/use-home.hook";

export default function Home() {

  const { charactersData, comicsData } = useHomeHook();

  return (
    <>
      <MainBanner />
      <CharactersSection charactersData={charactersData} />
      <ComicsSection comicsData={comicsData} />
    </>
  );
}