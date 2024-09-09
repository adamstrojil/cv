type Props = {
    children: string;
    isScreenReaderOnly?: boolean;
};

export const SectionHeading = ({ children, isScreenReaderOnly }: Props) => (
    <h2 className={`text-2xl text-neutral-400 opacity-75 font-semibold mb-10 font-header ${isScreenReaderOnly ? 'sr-only' : ''}`}>
        {children}
    </h2>
);
