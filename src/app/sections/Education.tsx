import { Education as EducationType } from '../data/types';
import { getEducationEntryPropsFromData } from '../utils';
import { CollapsibleSection } from './CollapsibleSection';

type Props = {
    educations: Array<EducationType>;
};

export const Education = ({ educations }: Props) => {
    const entries = educations.map(getEducationEntryPropsFromData);

    return <CollapsibleSection heading="Education" entries={entries} numberOfVisibleEntries={2} />;
};
