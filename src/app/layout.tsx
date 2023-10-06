import './globals.css';
import type { Metadata } from 'next';

import { Quicksand, Poppins } from 'next/font/google';

const quicksand = Quicksand({
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-quicksand',
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600'],
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Adam Strojil's CV",
    description: 'CV of a React developer Adam Strojil.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={`${quicksand.variable} ${poppins.variable}`}>
        <body>{children}</body>
    </html>
);

export default RootLayout;
