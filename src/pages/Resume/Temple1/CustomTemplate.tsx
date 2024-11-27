import Education from "../../../component/ResumeSection/CustomTemplate/Education";
import Experience from "../../../component/ResumeSection/CustomTemplate/Experience";
import Header from "../../../component/ResumeSection/CustomTemplate/Header";
import Languages from "../../../component/ResumeSection/CustomTemplate/Languages";
import Skill from "../../../component/ResumeSection/CustomTemplate/Skill";
import Summary from "../../../component/ResumeSection/CustomTemplate/Summary";
import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";

interface Section {
  name: string;
  component: FC;
}

interface SectionStatus {
  name: string;
  isActive: boolean;
}

const resumeSections: { [key: string]: Section } = {
  Summary: {
    name: "Summary",
    component: Summary,
  },
  Experience: {
    name: "Experience",
    component: Experience,
  },
  Skills: {
    name: "Skills",
    component: Skill,
  },
  Education: {
    name: "Education",
    component: Education,
  },
  Language: {
    name: "Language",
    component: Languages,
  },
};

const CustomTemplate = () => {
  const allSections: SectionStatus[] = useAppSelector(
    (state) => state.resume.resume.allSections
  );

  const result: Section[] = allSections.reduce(
    (acc, section) => {
      if (resumeSections[section.name] && section.isActive) {
        acc.push(resumeSections[section.name]);
      }
      return acc;
    },
    [
      {
        name: "Header",
        component: Header,
      },
    ] as Section[]
  );

  return (
    <div className="min-h-[590px] w-full py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      {result.map((section) => (
        <section.component key={section.name} />
      ))}
    </div>
  );
};

export default CustomTemplate;
