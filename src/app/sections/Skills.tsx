import { Skills as SkillsType } from '@/app/data/types';
import { SkillBox, Section } from '../components';

type Props = {
    skills: SkillsType;
};

export const Skills = ({ skills }: Props) => (
    <Section heading="Skills">
        {skills.map((skillset) => (
            <SkillBox key={skillset.name} skillset={skillset} />
        ))}
    </Section>
);
