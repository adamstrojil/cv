import { useState, useEffect, useRef } from 'react';

const mobileRegex = /iphone|ipad|ipod|android|blackberry|windows phone/g;

export const useElementHeight = () => {
    const [elementHeight, setElementHeight] = useState<number | null>(null);
    const elementRef = useRef<HTMLDivElement | null>(null);

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = mobileRegex.test(userAgent);

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

        if (isMobile) {
            //On mobile, the resize event is buggy, because it's triggered by (dis)appearing url bar mid-scroll
            return;
        }

        window.addEventListener('resize', calculateHeight);

        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, [isMobile]);

    return { elementHeight, elementRef };
};
