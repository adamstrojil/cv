import { ReactNode } from 'react';

type Props = {
    main: ReactNode;
    aside: ReactNode;
};

export const TwoColumnLayout = ({ main, aside }: Props) => (
    <>
        <div className="col-span-5 md:col-span-3">{main}</div>
        <div className="col-span-5 md:col-span-2">{aside}</div>
    </>
);
