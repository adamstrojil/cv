'use client';

import { useState } from 'react';

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
