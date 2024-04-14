import Section from "@/components/section/section.component";
import Title from "@/components/title/title.component";
import CardsWrapper from "@/components/cards-wrapper/cards-wrapper.component";
import {
  comicsMockupData,
} from "@/components/comics-card/mockup-data/comics.mockup-data";
import ComicsCard from "@/components/comics-card/comics-card.component";

export default function ComicsSection() {
  return (
    <Section>
      <Title title={"Comics"} />
      <CardsWrapper>
        {
          comicsMockupData.map((comic) => (
            <ComicsCard {...comic} key={comic.id} />
          ))
        }
      </CardsWrapper>
    </Section>
  );
}