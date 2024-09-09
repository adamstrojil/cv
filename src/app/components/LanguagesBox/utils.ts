import { Languages } from '@/app/data/types';

type LanguageByCategory = {
    primaryLanguages: Languages;
    secondaryLanguages: Languages;
};

export const divideLanguagesByProfiency = (languages: Languages): LanguageByCategory => {
    const dividedLanguages: LanguageByCategory = { primaryLanguages: [], secondaryLanguages: [] };

    return languages.reduce((acc, language) => {
        if (language.level.startsWith('c')) {
            acc.primaryLanguages.push(language);
        } else {
            acc.secondaryLanguages.push(language);
        }
        return acc;
    }, dividedLanguages);
};
