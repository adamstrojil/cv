import { calculateMonthDifference, getSinceDate, getUntilDate } from './utils';

export type DateRangeProps = {
    since: string;
    until?: string;
    isDurationVisible?: boolean;
    isSingleDate?: boolean;
};

export const DateRange = ({
    since: sinceRawValue,
    until: untilRawValue,
    isDurationVisible = false,
    isSingleDate = false,
}: DateRangeProps) => {
    const since = getSinceDate(sinceRawValue);
    const until = getUntilDate(untilRawValue, isSingleDate);
    const duration = calculateMonthDifference(sinceRawValue, untilRawValue);
    const formattedDuration = `(${duration})`;

    return (
        <div className="text-neutral-400 uppercase font-mono flex flex-wrap gap-2">
            {since}
            {until && '-'}
            {until}
            {isDurationVisible && <span className="text-nowrap">{formattedDuration}</span>}
        </div>
    );
};
