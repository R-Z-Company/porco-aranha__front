import Section from "@/components/section/section.component";
import Image from "next/image";
import LabelAndInfo from "@/components/label-and-info/label-and-info.component";
import {
  IFindOneCharacter,
} from "@/interfaces/characters/find-one-character.interface";

interface CharacterInfoCardProps {
  characterInfo: IFindOneCharacter;
}


export default function CharacterInfoCard({ characterInfo }: CharacterInfoCardProps) {

  const { fullName, description, thumbnail } = characterInfo;

  return (
    <Section flexRowPosition={true}>
      <Image
        src={thumbnail}
        alt={`${fullName}'s picture`}
        width={1000}
        height={1000}
        className={"h-52 w-52 rounded-md"}
      />
      <div className={"flex flex-col gap-8"}>
        <LabelAndInfo label={"Name"} info={fullName} />
        <LabelAndInfo label={"Description"} info={description} />
      </div>
    </Section>
  );
}