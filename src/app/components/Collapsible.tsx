'use client';
import { ReactNode } from 'react';
import { useElementHeight } from '../hooks/useElementHeight';

type CollapsibleProps = {
    children: ReactNode;
    isCollapsed: boolean;
    onToggleCollapsed: () => void;
    toggleButtonText: { textWhenCollapsed: string; textWhenExpanded: string };
};

export const Collapsible = ({
    children,
    isCollapsed,
    toggleButtonText: { textWhenCollapsed, textWhenExpanded },
    onToggleCollapsed,
}: CollapsibleProps) => {
    const { elementHeight, elementRef } = useElementHeight();

    const dynamicContainerStyles = { maxHeight: isCollapsed ? '128px' : `${elementHeight}px` }; // Can't use Tailwind because there's no way to pass the dynamic height to it
    const contentOverlayClassName = `${
        isCollapsed ? 'opacity-100 delay-0 duration-300 ' : 'opacity-0 delay-700 duration-1000 h-0'
    } transition-all absolute flex justify-center bottom-0 left-0 w-full text-center m-0 px-30 bg-gradient-to-t from-white from-20% h-64`;

    return (
        <div
            ref={elementRef}
            style={dynamicContainerStyles}
            className={'transition-[max-height] duration-1000 relative overflow-hidden'}
        >
            {children}
            <div className={contentOverlayClassName} />
            <div className="flex justify-center">
                <button
                    onClick={onToggleCollapsed}
                    className="absolute bottom-0 whitespace-nowrap inline-flex items-center underline text-md font-medium text-neutral-500"
                >
                    {isCollapsed ? textWhenCollapsed : textWhenExpanded}
                </button>
            </div>
        </div>
    );
};
