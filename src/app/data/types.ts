export type PersonData = {
    name: string;
    surname: string;
    specialization: string;
    workExperience: Array<WorkExperience>;
    education: Array<Education>;
    projects: Array<Project>;
    contacts: Contacts;
    skills: Skills;
    languages: Languages;
};

export type Contacts = { linkedIn: string; github: string };

export type WorkExperience = {
    company: string;
    since: string;
    until: string;
    role: string;
    technologies: Array<Technology>;
    descriptionParagraphs: Array<string>;
};

export type TechnologyVariant = 'primary' | 'secondary';

export type Technology = {
    text: string;
    variant: TechnologyVariant;
};

export type Education = {
    school: string;
    type: string;
    since: string;
    until: string;
    descriptionParagraphs?: Array<string>;
};

export type Project = {
    name: string;
    type: string;
    since?: string;
    technologies: Array<Technology>;
    descriptionParagraphs?: Array<string>;
    linkUrl?: string;
};

export type Skills = Array<SkillSet>;
export type SkillSet = { name: string; skills: Array<string> };

export type Languages = Array<Language>;
export type Language = {
    language: string;
    level: string;
};
