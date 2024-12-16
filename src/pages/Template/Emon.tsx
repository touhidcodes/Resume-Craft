import TemplateWrapper from "../../component/shared/TemplateWrapper";
import Experience from "../../component/TemplateSection/Emon/EExperience";
import EHeader from "../../component/TemplateSection/Emon/EHeader";
import Eskills from "../../component/TemplateSection/Emon/Eskills";
import Esummery from "../../component/TemplateSection/Emon/Esummery";
import Education from "../../component/TemplateSection/Orion/Education";
import Languages from "../../component/TemplateSection/Orion/Languages";

import useActiveSections, {
  TResumeSections,
} from "../../hooks/useActiveSections";
const Emon = () => {
  const resumeSections: TResumeSections = {
    Summary: {
      name: "Summary",
      component: Esummery,
    },
    Skills: {
      name: "Skills",
      component: Eskills,
    },
    Experience: {
      name: "Experience",
      component: Experience,
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

  const sections = useActiveSections(resumeSections, {
    name: "Header",
    component: EHeader,
  });
  return (
    <TemplateWrapper>
      {sections?.map((section) => (
        <section.component key={section.name} />
      ))}
    </TemplateWrapper>
  );
};

export default Emon;
