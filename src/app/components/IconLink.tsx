import { ReactNode } from 'react';

type Props = {
    to: string;
    icon: ReactNode;
    children: ReactNode;
    ariaLabel?: string;
};

export const IconLink = ({ icon, to, children, ariaLabel }: Props) => (
    <a href={to} target="_blank" aria-label={ariaLabel} className="flex items-center gap-2">
        {icon}
        {children}
    </a>
);
