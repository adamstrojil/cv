import { Languages } from '../../data/types';
import { divideLanguagesByProfiency } from './utils';
import { LanguageList } from './LanguageList';

type Props = {
    languages: Languages;
};

export const LanguagesBox = ({ languages }: Props) => {
    const { primaryLanguages, secondaryLanguages } = divideLanguagesByProfiency(languages);

    return (
        <div className="flex flex-row gap-8">
            <LanguageList languages={primaryLanguages} category="primary" />
            <LanguageList languages={secondaryLanguages} category="secondary" />
        </div>
    );
};
