import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import { IconLink, Section, SectionHeading } from '../../../components';

type Props = {
    github: string;
    linkedIn: string;
};

export const Contacts = ({ github, linkedIn }: Props) => (
    <Section>
        <SectionHeading isScreenReaderOnly>Contacts</SectionHeading>
        <address className="not-italic font-medium text-lg mt-1 flex flex-col">
            <IconLink
                icon={<FaGithub aria-hidden />}
                to={`https://www.github.com/${github}`}
                ariaLabel="Adam Strojil's Github page"
            >
                {github}
            </IconLink>
            <IconLink
                icon={<FaLinkedinIn aria-hidden />}
                to={`https://www.linkedin.com/in/${linkedIn}`}
                ariaLabel="Adam Strojil's LinkedIn page"
            >
                {linkedIn}
            </IconLink>
            <span className="flex items-center gap-2">
                <FaLocationDot /> Zlín, Czechia
            </span>
        </address>
    </Section>
);
