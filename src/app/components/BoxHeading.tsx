import React from "react";

type Props = { primaryText: string; secondaryText: string };

export function BoxHeading({ primaryText, secondaryText }: Props) {
  return (
    <h3 className="text-2xl font-bold">
      {primaryText}
      <span className="font-normal before:content-['/'] before:mx-2 before:font-bold ">
        {secondaryText}
      </span>
    </h3>
  );
}