import { Project } from '@/app/data/types';
import { CollapsibleSection } from '../components';
import { getPersonalProjectEntryPropsFromData } from './utils';

type Props = {
    personalProjects: Array<Project>;
};

export const PersonalProjects = ({ personalProjects }: Props) => {
    const entries = personalProjects.map(getPersonalProjectEntryPropsFromData);

    return <CollapsibleSection heading="Personal Projects" entries={entries} />;
};
