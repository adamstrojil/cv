import React from "react";

export type BadgeVariant = "primary" | "secondary";

export type Props = {
  text: string;
  variant: BadgeVariant;
  uppercase?: boolean;
};

export function Badge({text, variant, uppercase = false}: Props) {
  const variantStyles =
    variant === "primary"
      ? `text-blue-600 bg-blue-50`
      : `text-neutral-500 bg-neutral-50`;

  const textTransformStyle = uppercase ? "uppercase" : "lowercase"

  return (
    <span
      className={`whitespace-nowrap inline-flex items-center rounded-lg px-2 py-1 text-sm font-medium ${variantStyles} ${textTransformStyle}`}
    >
      {text}
    </span>
  );
}
