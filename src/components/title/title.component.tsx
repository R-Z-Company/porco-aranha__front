interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1
      className={"pb-4 border-b-2 border-neutral-800 text-3xl text-gray-50 font-bold text-center"}
    >{title}
    </h1>
  );
}