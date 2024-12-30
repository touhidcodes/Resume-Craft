import TemplateWrapper from "../../component/shared/TemplateWrapper";
import Certificates from "../../component/TemplateSection/Orion/Certificates";
import Education from "../../component/TemplateSection/Orion/Education";
import Experience from "../../component/TemplateSection/Orion/Experience";
import Header from "../../component/TemplateSection/Orion/Header";
import Languages from "../../component/TemplateSection/Orion/Languages";
import Skill from "../../component/TemplateSection/Orion/Skill";
import Summary from "../../component/TemplateSection/Orion/Summary";
import useActiveSections, {
  TResumeSections,
} from "../../hooks/useActiveSections";

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
  Certificate: {
    name: "Certificate",
    component: Certificates,
  },
};

const Orion = () => {
  const sections = useActiveSections(resumeSections, {
    name: "Header",
    component: Header,
  });

  return (
    <TemplateWrapper>
      {sections?.map((section) => (
        <section.component key={section.name} />
      ))}
    </TemplateWrapper>
  );
};

export default Orion;
