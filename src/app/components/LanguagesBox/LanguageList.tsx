import { Languages } from '@/app/data/types';

import { Badge } from '../Badge';

type Props = { languages: Languages; category: 'primary' | 'secondary' };

export const LanguageList = ({ languages, category }: Props) => (
    <ul className="gap-x-2 gap-y-1 mb-4">
        {languages.map(({ language, level }) => (
            <li key={language} className="my-1 flex gap-2 content-center items-baseline">
                <Badge text={level} variant={category} isUppercase className="w-8" />
                <span className="capitalize inline-block">{language}</span>
            </li>
        ))}
    </ul>
);
