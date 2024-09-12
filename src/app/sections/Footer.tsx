'use client';

import { Link } from '../components';
import { useLastCommitDate } from '../hooks';

const NO_BREAK_SPACE = '\xa0'; //TODO refactor with css

export const Footer = () => {
    const lastUpdate = useLastCommitDate();

    return (
        <footer className="text-right mt-2 text-gray-700 ">
            <small className="leading-tight flex justify-end flex-col">
                <p>Last update {lastUpdate}.</p>
                <p>
                    Design{NO_BREAK_SPACE}inspired{NO_BREAK_SPACE}by{NO_BREAK_SPACE}
                    <Link href="https://sanatrath.com/">Sanat{NO_BREAK_SPACE}Rath</Link>.{' '}
                </p>
            </small>
        </footer>
    );
};
