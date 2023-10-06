import React from "react";
import { SkillSet } from "../data/types";

type Props = {
  skillset: SkillSet
};

export function SkillBox({ skillset: {skills, name} }: Props) {
  return (
    <>
      <dl className="list-none inline-flex flex-wrap gap-x-1 mb-4">
      <dt className="font-bold capitalize">{name}:</dt>
        {skills.map((skill) => (
          <dd
            key={skill}
            className="after:content-['•'] after:ml-1 after:align-text-top last:after:content-['']"
          >
            {skill}
          </dd>
        ))}
      </dl>
    </>
  );
}
