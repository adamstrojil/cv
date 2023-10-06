
type Props = {
  text: string;
};

export function SectionHeading({ text }: Props) {
  return (
    <h2 className="text-2xl text-neutral-400 opacity-75 font-semibold mb-10 font-header">
      {text}
    </h2>
  );
}
