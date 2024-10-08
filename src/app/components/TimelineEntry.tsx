import { BadgeProps } from './Badge';
import { BadgeList } from './BadgeList';
import { BoxHeading } from './BoxHeading';
import { DateRange, DateRangeProps } from './DateRange';
import { Link } from './Link';

export type TimelineEntryProps = {
    headingPrimaryText: string;
    headingSecondaryText: string;
    dateRange?: DateRangeProps;
    badges?: Array<BadgeProps>;
    descriptionParagraphs?: Array<string>;
    linkUrl?: string;
};

export const TimelineEntry = ({
    headingPrimaryText,
    headingSecondaryText,
    descriptionParagraphs = [],
    dateRange,
    badges,
    linkUrl,
}: TimelineEntryProps) => (
    <article className="mb-10 last:mb-0">
        <BoxHeading primaryText={headingPrimaryText} secondaryText={headingSecondaryText} />
        {dateRange && (
            <div className="mt-2 ml-0.5">
                <DateRange {...dateRange} />
            </div>
        )}
        {badges?.length && (
            <div className="mt-5 -ml-0.5">
                <BadgeList badges={badges} />
            </div>
        )}
        {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-4">
                {paragraph}
            </p>
        ))}
        {linkUrl && (
            <p className="flex gap-1 mt-3 flex-wrap">
                Available at:
                <Link href={linkUrl}>{linkUrl}</Link>
            </p>
        )}
    </article>
);
