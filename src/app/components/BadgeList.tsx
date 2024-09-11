import { Badge } from '../components/Badge';
import { BadgeProps } from './Badge';

type Props = {
    badges: Array<BadgeProps>;
};

export const BadgeList = ({ badges }: Props) => (
    <ul className="list-none inline-flex flex-wrap gap-x-2 gap-y-2">
        {badges.map(({ text, variant }) => (
            <li key={text}>
                <Badge text={text} variant={variant} />
            </li>
        ))}
    </ul>
);
