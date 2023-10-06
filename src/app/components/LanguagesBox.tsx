import { Languages } from "../data/types";
import { Badge } from "../components";

type Props = {
  languages: Languages;
};

export function LanguagesBox({ languages }: Props) {
  return (
    <>
      {/* <h3 className="font-bold">Languages</h3> */}
      <div className="flex flex-row gap-8">
        <ul className="gap-x-2 gap-y-1 mb-4">
          {languages
            .filter(({ level }) => level.startsWith("c"))
            .map(({ language, level }) => (
              <li key={language} className="my-1">
                <Badge text={level} variant="primary" uppercase />
                <span className="ml-2">{language}</span>
              </li>
            ))}
        </ul>
        <ul className="gap-x-2 gap-y-1 mb-4">
          {languages
            .filter(({ level }) => !level.startsWith("c"))
            .map(({ language, level }) => (
              <li key={language} className="my-1">
                <Badge text={level} variant="secondary" uppercase />
                <span className="ml-2">{language}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
