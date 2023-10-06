import React from 'react';
import { Skills as SkillsType } from '../data/types';
import { Section, SkillBox } from '../components';

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
