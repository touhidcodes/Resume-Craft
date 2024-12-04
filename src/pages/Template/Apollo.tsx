import Education from "../../../component/TemplateSection/Apollo/Education";
import Experience from "../../../component/TemplateSection/Apollo/Experience";
import Header from "../../../component/TemplateSection/Apollo/Header";
import Languages from "../../../component/TemplateSection/Apollo/Languages";
import Skill from "../../../component/TemplateSection/Apollo/Skill";
import Summary from "../../../component/TemplateSection/Apollo/Summary";
import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";

interface Section {
  name: string;
  component: FC;
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

const Apollo = () => {
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
    [
      {
        name: "Header",
        component: Header,
      },
    ] as Section[]
  );

  return (
    <div className="min-h-[590px] w-full py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      {result?.map((section) => (
        <section.component key={section.name} />
      ))}
    </div>
  );
};

export default Apollo;
