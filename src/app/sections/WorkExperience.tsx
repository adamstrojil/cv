import { WorkExperience as WorkExperienceType } from '../data/types';
import { CollapsibleSection } from './CollapsibleSection';
import { getWorkExperienceEntryPropsFromData } from '../utils';

type Props = {
    workExperiences: Array<WorkExperienceType>;
};

export const WorkExperience = ({ workExperiences }: Props) => {
    const entries = workExperiences.map(getWorkExperienceEntryPropsFromData);

    return <CollapsibleSection heading="Work Experience" entries={entries} />;
};
