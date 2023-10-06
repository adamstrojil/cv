import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const Main = ({ children }: Props) => (
    <main className="grid grid-cols-5 grid-rows-auto bg-white gap-x-20 mt-16 justify-center font-body">{children}</main>
);
