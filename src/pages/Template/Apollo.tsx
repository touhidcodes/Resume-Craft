import useActiveSections, {
  TResumeSections,
} from "../../hooks/useActiveSections";
import Awards from "../../component/TemplateSection/Apollo/Awards";
import Summary from "../../component/TemplateSection/Apollo/Summary";
import Experience from "../../component/TemplateSection/Apollo/Experience";
import Skill from "../../component/TemplateSection/Apollo/Skill";
import Languages from "../../component/TemplateSection/Apollo/Languages";
import Header from "../../component/TemplateSection/Apollo/Header";
import Education from "../../component/TemplateSection/Apollo/Education";

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
  Awards: {
    name: "AWards",
    component: Awards,
  },
};

const Apollo = () => {
  const sections = useActiveSections(resumeSections, {
    name: "Header",
    component: Header,
  });

  return (
    <div className="min-h-[590px] w-full py-[30px] px-5 md:px-[50px] rounded-[9px] border my-[20px]">
      {sections?.map((section) => (
        <section.component key={section.name} />
      ))}
    </div>
  );
};

export default Apollo;
