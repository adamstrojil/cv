import { Language, Languages } from '@/app/data/types';

type LanguagesByCategory = {
    primary: Languages;
    secondary: Languages;
};

const languagesReducer = (languagesByCategory: LanguagesByCategory, language: Language) => {
    if (language.level.startsWith('c')) {
        languagesByCategory.primary.push(language);
    } else {
        languagesByCategory.secondary.push(language);
    }
    return languagesByCategory;
};

export const divideLanguagesByProfiency = (languages: Languages): LanguagesByCategory => {
    const dividedLanguages: LanguagesByCategory = { primary: [], secondary: [] };

    return languages.reduce(languagesReducer, dividedLanguages);
};
