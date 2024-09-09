import { useState, useEffect, useRef } from 'react';

export const useElementHeight = () => {
    const [elementHeight, setElementHeight] = useState<number | null>(null);
    const elementRef = useRef<HTMLDivElement | null>(null);

    const calculateHeight = () => {
        if (elementRef.current) {
            const element = elementRef.current;
            const originalMaxHeight = element.style.maxHeight;

            // Temporarily remove the max-height property to measure the full height
            element.style.maxHeight = '';
            // Measure the full height
            const fullHeight: number = element.offsetHeight;
            // Restore the original max-height property
            element.style.maxHeight = originalMaxHeight;

            setElementHeight(fullHeight);
        }
    };

    useEffect(() => {
        calculateHeight();
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            //On mobile, the resize event is buggy, because it's triggered by (dis)appearing url bar mid-scroll
            return;
        }

        window.addEventListener('resize', calculateHeight);
        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    return { elementHeight, elementRef };
};
