import ComicId from "@/pages/comics/id/comic-id.page";

interface ComicsProps {
  params: {
    id: string
  };
}

export default function Comics({ params: { id } }: ComicsProps) {
  return <ComicId id={id} />;
}