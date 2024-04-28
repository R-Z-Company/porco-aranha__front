interface LabelAndInfoProps {
  label: string;
  info: string;
}

export default function LabelAndInfo({ label, info }: LabelAndInfoProps) {
  return (
    <div className={"flex flex-col gap-1"}>
      <label
        className={"text-sm text-gray-400 first-letter:uppercase"}>{label}</label>
      <p className={"text-lg text-gray-50"}>{info}</p>
    </div>
  );
}