import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const Page = ({ children }: Props) => (
    <div className="bg-white w-full max-w-screen-xl min-w-[375px] px-20 pt-20 pb-10 font-body shadow-xl">
        {children}
    </div>
);
