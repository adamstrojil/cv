import { Badge } from "../components";

type Props = {
  badges: Array<{text: string, variant: "primary" | "secondary"}>;
};

export function BadgeList({ badges }: Props) {
  return (
    <ul className="list-none inline-flex flex-wrap gap-x-2 gap-y-2">
      {badges.map((badge) => (
        <li key={badge.text}>
          <Badge text={badge.text} variant={badge.variant} />
        </li>
      ))}
    </ul>
  );
}
