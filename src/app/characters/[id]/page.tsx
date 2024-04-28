import CharactersId from "@/pages/characters/id/characters-id.page";

interface CharactersProps {
  params: {
    id: string
  };
}

export default function Characters({ params: { id } }: CharactersProps) {
  return <CharactersId id={id} />;
}