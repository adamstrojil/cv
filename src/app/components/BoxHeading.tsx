import React from 'react';

type Props = { primaryText: string; secondaryText: string };

export const BoxHeading = ({ primaryText, secondaryText }: Props) => (
    <h3 className="text-2xl font-bold">
        {primaryText}
        <span className="font-normal before:content-['/'] before:mx-2 before:font-bold ">{secondaryText}</span>
    </h3>
);
