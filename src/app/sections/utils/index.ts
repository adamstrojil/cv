import { Education, WorkExperience, Project } from '@/app/data/types';
import { TimelineEntryWithId } from '../types';

export const getEducationEntryPropsFromData = ({
    since,
    until,
    school,
    type,
    descriptionParagraphs,
}: Education): TimelineEntryWithId => ({
    id: crypto.randomUUID(),
    headingPrimaryText: school,
    headingSecondaryText: type,
    dateRange: { since, until },
    descriptionParagraphs,
});

export const getWorkExperienceEntryPropsFromData = ({
    role,
    until,
    since,
    company,
    technologies,
    descriptionParagraphs,
}: WorkExperience): TimelineEntryWithId => ({
    id: crypto.randomUUID(),
    headingPrimaryText: company,
    headingSecondaryText: role,
    badges: technologies,
    dateRange: { since, until, isDurationVisible: true },
    descriptionParagraphs,
});

export const getPersonalProjectEntryPropsFromData = ({
    name,
    type,
    since,
    descriptionParagraphs,
    technologies,
    linkUrl,
}: Project): TimelineEntryWithId => ({
    id: crypto.randomUUID(),
    headingPrimaryText: name,
    headingSecondaryText: type,
    descriptionParagraphs,
    badges: technologies,
    linkUrl,
    ...(since ? { dateRange: { since, isSingleDate: true } } : {}),
});
