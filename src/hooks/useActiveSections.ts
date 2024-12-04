import { FC } from "react";
import { useAppSelector } from "../redux/hooks";

type Section = {
  name: string;
  component: FC;
};

export type TResumeSections = { [key: string]: Section };

const useActiveSections = (
  resumeSections: TResumeSections,
  headerSection: Section
) => {
  const allSections = useAppSelector(
    (state) => state?.resume?.resume?.allSection || []
  );

  const result: Section[] = allSections.reduce(
    (acc, section) => {
      if (resumeSections[section.name] && section.isActive) {
        acc.push(resumeSections[section.name]);
      }
      return acc;
    },
    [headerSection] as Section[]
  );

  return result;
};

export default useActiveSections;
