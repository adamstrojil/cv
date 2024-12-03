import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    to: string;
    icon: ReactNode;
    children: ReactNode;
    ariaLabel?: string;
    shouldDisplayInSameTab?: boolean;
};

export const IconLink = ({ icon, to, children, ariaLabel, shouldDisplayInSameTab }: Props) => (
    <Link
        href={to}
        target={shouldDisplayInSameTab ? '_self' : '_blank'}
        aria-label={ariaLabel}
        className="flex items-center gap-2 "
    >
        {icon}
        <span className="underline">{children}</span>
    </Link>
);
