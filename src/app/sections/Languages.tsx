import { Language } from '@/app/data/types';
import { LanguagesBox, Section } from '../components';

type Props = {
    languages: Array<Language>;
};

export const Languages = ({ languages }: Props) => (
    <Section heading="Language Proficiency">
        <LanguagesBox languages={languages} />
    </Section>
);
