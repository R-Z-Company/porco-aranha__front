import CharactersCard
  from "@/components/characters-card/characters-card.component";
import Section from "@/components/section/section.component";
import Title from "@/components/title/title.component";
import CardsWrapper from "@/components/cards-wrapper/cards-wrapper.component";
import {
  IFindAllCharacters,
} from "@/interfaces/characters/find-all-characters.interface";

interface CharactersSectionProps {
  charactersData: IFindAllCharacters[];
}

export default function CharactersSection({ charactersData }: CharactersSectionProps) {

  return (
    <Section id={"characters"}>
      <Title title="Characters" />
      <CardsWrapper>
        {charactersData?.map((character, index) => (
          <CharactersCard {...character} key={index} />
        ))}
      </CardsWrapper>
    </Section>
  );
}