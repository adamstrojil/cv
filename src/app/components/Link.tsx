interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const Link = ({ href, children, className = '' }: LinkProps) => (
    <a href={href} target="_blank" className={`text-blue-700 hover:text-blue-800 underline ${className}`}>
        {children}
    </a>
);
