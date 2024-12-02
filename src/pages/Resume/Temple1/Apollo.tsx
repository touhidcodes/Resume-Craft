import Education from "../../../component/ResumeSection/Apollo/Education";
import Experience from "../../../component/ResumeSection/Apollo/Experience";
import Header from "../../../component/ResumeSection/Apollo/Header";
import Languages from "../../../component/ResumeSection/Apollo/Languages";
import Skill from "../../../component/ResumeSection/Apollo/Skill";
import Summary from "../../../component/ResumeSection/Apollo/Summary";
import useActiveSections, {
  TResumeSections,
} from "../../../hooks/useActiveSections";

const resumeSections: TResumeSections = {
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
  const sections = useActiveSections(resumeSections, {
    name: "Header",
    component: Header,
  });

  return (
    <div className="min-h-[590px] w-full py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      {sections?.map((section) => (
        <section.component key={section.name} />
      ))}
    </div>
  );
};

export default Apollo;
