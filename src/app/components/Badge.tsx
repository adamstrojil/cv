type BadgeVariant = 'primary' | 'secondary';

export type BadgeProps = {
    text: string;
    variant: BadgeVariant;
    isUppercase?: boolean;
    className?: string;
};

export const Badge = ({ text, variant, isUppercase = false, className }: BadgeProps) => {
    const variantStyles = variant === 'primary' ? `text-blue-600 bg-blue-50` : `text-neutral-500 bg-neutral-50`;
    const textTransformStyle = isUppercase ? 'uppercase' : 'lowercase';

    return (
        <span
            className={`whitespace-nowrap inline-flex items-center justify-center rounded-lg px-2 py-1 text-sm font-medium ${variantStyles} ${textTransformStyle} ${className}`}
        >
            {text}
        </span>
    );
};
