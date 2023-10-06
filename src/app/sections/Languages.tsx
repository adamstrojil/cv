import { LanguagesBox, Section } from '../components';
import { Language } from '../data/types';

type Props = {
    languages: Array<Language>;
};

export const Languages = ({ languages }: Props) => (
    <Section heading="Language Proficiency">
        <LanguagesBox languages={languages} />
    </Section>
);
