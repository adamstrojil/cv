import { Languages } from '@/app/data/types';

import { divideLanguagesByProfiency } from './utils';
import { LanguageList } from './LanguageList';

type Props = {
    languages: Languages;
};

export const LanguagesBox = ({ languages }: Props) => {
    const { primary, secondary } = divideLanguagesByProfiency(languages);

    return (
        <div className="flex flex-row gap-8">
            <LanguageList languages={primary} category="primary" />
            <LanguageList languages={secondary} category="secondary" />
        </div>
    );
};
