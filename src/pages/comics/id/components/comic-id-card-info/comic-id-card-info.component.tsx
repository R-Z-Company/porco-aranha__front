import Section from "@/components/section/section.component";
import Image from "next/image";
import LabelAndInfo from "@/components/label-and-info/label-and-info.component";
import { IFindOneComic } from "@/interfaces/comics/find-one-comic.interface";

interface ComicIdCardInfoProps {
  comicData: IFindOneComic;
}

export default function ComicIdCardInfo({ comicData }: ComicIdCardInfoProps) {

  const {
    title,
    description,
    thumbnail,
    focDate,
    isbn,
    creators,
  } = comicData;


  return (
    <Section flexRowPosition={true}>
      <Image
        src={thumbnail}
        alt={`${title}'s picture`}
        width={1000}
        height={1000}
        className={"w-1/6 h-fit rounded-md"}
      />
      <div className={"flex flex-col gap-8 w-full"}>
        <LabelAndInfo label={"Title"} info={title} />
        <LabelAndInfo label={"Description"} info={description} />
        <div className={"grid grid-cols-2 gap-8"}>
          <LabelAndInfo label={"FOC Data"} info={focDate} />
          <LabelAndInfo label={"ISBN"} info={isbn} />
          {
            creators.map((creator, index) => (
              <LabelAndInfo key={index} label={creator.role}
                            info={creator.name} />
            ))
          }
        </div>
      </div>
    </Section>
  );
}