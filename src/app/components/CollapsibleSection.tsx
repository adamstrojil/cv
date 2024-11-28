'use client';

import { useEffect, useState } from 'react';

import { TimelineEntryWithId } from '../sections/types';
import { Section } from './layout/Section';
import { TimelineEntry } from './TimelineEntry';
import { Collapsible } from './Collapsible';

const DEFAULT_NUMBER_OF_VISIBLE_ENTRIES = 1;

type Props = {
    heading: string;
    entries: Array<TimelineEntryWithId>;
    numberOfVisibleEntries?: number;
};

export const CollapsibleSection = ({
    entries,
    heading,
    numberOfVisibleEntries = DEFAULT_NUMBER_OF_VISIBLE_ENTRIES,
}: Props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    // Expand all sections before printing and revert afterward
    useEffect(() => {
        const handleBeforePrint = () => setIsCollapsed(false);
        const handleAfterPrint = () => setIsCollapsed(true);

        window.addEventListener('beforeprint', handleBeforePrint);
        window.addEventListener('afterprint', handleAfterPrint);

        return () => {
            window.removeEventListener('beforeprint', handleBeforePrint);
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, []);

    const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

    const alwaysVisibleEntries = entries.slice(0, numberOfVisibleEntries);
    const collapsibleEntries = entries.slice(numberOfVisibleEntries);
    const hasCollapsibleEntries = !!collapsibleEntries.length;

    const toggleButtonText = {
        textWhenCollapsed: `see all (${collapsibleEntries.length} more)`,
        textWhenExpanded: 'show less',
    };

    return (
        <Section heading={heading}>
            {/* <button onClick={()=>window.print()}>Print</button> */}

            {alwaysVisibleEntries.map(({ id, ...entryProps }) => (
                <TimelineEntry key={id} {...entryProps} />
            ))}
            {hasCollapsibleEntries && (
                <Collapsible
                    isCollapsed={isCollapsed}
                    toggleButtonText={toggleButtonText}
                    onToggleCollapsed={toggleCollapsed}
                >
                    {collapsibleEntries.map(({ id, ...entryProps }) => (
                        <TimelineEntry key={id} {...entryProps} />
                    ))}
                </Collapsible>
            )}
        </Section>
    );
};
