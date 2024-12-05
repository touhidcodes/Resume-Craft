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
import TemplateWrapper from "../../component/shared/TemplateWrapper";
import Certificates from "../../component/TemplateSection/Apollo/Certificates";
import Hobby from "../../component/TemplateSection/Apollo/Hobby";

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
  Awards: {
    name: "AWards",
    component: Awards,
  },
  Hobby: {
    name: "Hobby",
    component: Hobby,
  },
};

const Apollo = () => {
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

export default Apollo;
