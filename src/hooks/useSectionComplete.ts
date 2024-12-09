import { useAppSelector } from "../redux/hooks";

type SectionCompletion = {
  [sectionName: string]: boolean;
};

const useSectionComplete = () => {
  const allSections = useAppSelector(
    (state) => state.resume.resume?.allSection
  );

  const sectionCompletion = useAppSelector(
    (state) => state.resume?.sectionCompletion as SectionCompletion
  );

  // If `allSections` is undefined, return an empty array to prevent runtime errors
  const activeSections = allSections
    ?.filter((section) => section.isActive)
    .map((section) => section.name);

  // Ensure sectionCompletion is not undefined, and use safe access
  let result = activeSections?.map((sectionName) => ({
    name: sectionName,
    isActive: sectionCompletion[sectionName],
  }));

  result?.unshift({
    name: "Header",
    isActive: sectionCompletion["Header"],
  });

  const totalActiveSection = allSections?.filter(
    (section) => section.isActive
  ).length;

  const totalCompleteSection = Object.values(sectionCompletion).filter(
    (section) => section
  ).length;

  return { result, totalActiveSection, totalCompleteSection };
};

export default useSectionComplete;
