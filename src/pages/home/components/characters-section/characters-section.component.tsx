import CharactersCard
  from "@/components/characters-card/characters-card.component";
import Section from "@/components/section/section.component";
import Title from "@/components/title/title.component";
import {
  characters,
} from "@/pages/home/components/characters-section/mockup-data/characters.mockup-data";
import CardsWrapper from "@/components/cards-wrapper/cards-wrapper.component";

export default function CharactersSection() {
  return (
    <Section id={"characters"}>
      <Title title="Characters" />
      <CardsWrapper>
        {characters.map((character) => (
          <CharactersCard {...character} key={character.id} />
        ))}
      </CardsWrapper>
    </Section>
  );
}