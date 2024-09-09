import React from 'react';
import { Link } from '../components/Link';

const NO_BREAK_SPACE = '\xa0'; //TODO refactor with css

export const Footer = () => (
    <footer className="text-right mt-2 text-gray-700 flex justify-center">
        Design{NO_BREAK_SPACE}inspired{NO_BREAK_SPACE}by{NO_BREAK_SPACE}
        <Link href="https://sanatrath.com/">Sanat{NO_BREAK_SPACE}Rath</Link>.
    </footer>
);
