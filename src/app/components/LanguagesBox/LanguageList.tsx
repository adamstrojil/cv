import { Languages } from '@/app/data/types';

import { Badge } from '../Badge';

type Props = { languages: Languages; category: 'primary' | 'secondary' };

export const LanguageList = ({ languages, category }: Props) => (
    <ul className="gap-x-2 gap-y-1 mb-4">
        {languages.map(({ language, level }) => (
            <li key={language} className="my-1">
                <Badge text={level} variant={category} isUppercase />
                <span className="ml-2 capitalize inline-block">{language}</span>
            </li>
        ))}
    </ul>
);
