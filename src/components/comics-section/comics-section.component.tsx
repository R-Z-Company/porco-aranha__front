import Section from "@/components/section/section.component";
import Title from "@/components/title/title.component";
import CardsWrapper from "@/components/cards-wrapper/cards-wrapper.component";
import ComicsCard from "@/components/comics-card/comics-card.component";
import { IFindAllComics } from "@/interfaces/comics/find-all-comics.interface";

interface ComicsSectionProps {
  comicsData: IFindAllComics[];
}

export default function ComicsSection({ comicsData }: ComicsSectionProps) {
  return (
    <Section>
      <Title title={"Comics"} />
      <CardsWrapper>
        {
          comicsData?.map((comic, index) => (
            <ComicsCard {...comic} key={index} />
          ))
        }
      </CardsWrapper>
    </Section>
  );
}