import React, { ReactNode } from 'react';

import { SectionHeading } from '../SectionHeading';

type Props = {
    heading?: string;
    children: ReactNode;
};

export const Section = ({ heading, children }: Props) => (
    <section className="my-10 last:mb-0 bg-white">
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {children}
    </section>
);
