import { useEffect, useState } from 'react';

const REPOSITORY_URL = 'https://api.github.com/repos/adamstrojil/cv/commits?per_page=1';

export const useLastCommitDate = () => {
    const [lastUpdate, setLastUpdate] = useState('');

    useEffect(() => {
        const fetchLastCommitDate = async () => {
            try {
                const response = await fetch(REPOSITORY_URL);
                const data = await response.json();
                const lastCommitDate = new Date(data[0].commit.committer.date);
                setLastUpdate(
                    lastCommitDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                    }),
                );
            } catch {
                setLastUpdate('unknown');
            }
        };

        fetchLastCommitDate();
    }, []);

    return lastUpdate;
};
