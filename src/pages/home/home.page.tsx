import CharactersSection
  from "@/pages/home/components/characters-section/characters-section.component";
import MainBanner from "./components/main-banner/main-banner.component";
import ComicsSection
  from "@/pages/home/components/comics-section/comics-section.component";

export default function Home() {
  return (
    <>
      <MainBanner />
      <CharactersSection />
      <ComicsSection />
    </>
  );
}