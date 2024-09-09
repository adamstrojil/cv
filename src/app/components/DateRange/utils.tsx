import { ReactNode } from 'react';

const YEAR_AND_MONTH_REGEX = /^\d{4}-\d{2}$/; //e.g. "2023-12"
const NON_BREAKING_SPACE = '\xa0';

const parseDate = (dateString: string) => {
    const [year, month] = dateString.split('-').map(Number);
    return new Date(year, month - 1);
};

const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // JavaScript months are zero-based
    return `${year}-${month.toString().padStart(2, '0')}`;
};

const isValidDate = (date: string) => YEAR_AND_MONTH_REGEX.test(date);

const formatMonthYear = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const monthName = months[parseInt(month, 10) - 1];
    const formattedDate = `${monthName}${NON_BREAKING_SPACE}${year}`;

    return formattedDate;
};

export const calculateMonthDifference = (start: string, finish?: string) => {
    const startDate = parseDate(start);
    const finishDate = parseDate(finish || getCurrentDate());

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const finishYear = finishDate.getFullYear();
    const finishMonth = finishDate.getMonth();

    let yearDiff = finishYear - startYear;
    let monthDiff = finishMonth - startMonth;

    if (yearDiff > 0) {
        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }
        const months = `${monthDiff} month${monthDiff > 1 ? 's' : ''}`;

        if (yearDiff === 0) {
            return `${months}`;
        } else if (yearDiff === 1) {
            return `${yearDiff} year ${months}`;
        } else {
            return `${yearDiff} years ${months}`;
        }
    } else {
        return `${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
    }
};

export const getUntilDate = (until?: string, isSingleDate = false): ReactNode => {
    if (isSingleDate) {
        return undefined;
    }

    if (!until) {
        return <span>Present</span>;
    }

    if (isValidDate(until)) {
        return <time dateTime={until}>{formatMonthYear(until)}</time>;
    }

    return <span>{until}</span>;
};

export const getSinceDate = (since: string): ReactNode => {
    if (isValidDate(since)) {
        return <time dateTime={since}>{formatMonthYear(since)}</time>;
    }

    return <span>{since}</span>;
};
