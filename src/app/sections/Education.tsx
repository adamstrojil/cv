import { Education as EducationType } from '@/app/data/types';
import { CollapsibleSection } from '../components';
import { getEducationEntryPropsFromData } from './utils';

type Props = {
    educations: Array<EducationType>;
};

export const Education = ({ educations }: Props) => {
    const entries = educations.map(getEducationEntryPropsFromData);

    return <CollapsibleSection heading="Education" entries={entries} numberOfVisibleEntries={2} />;
};
