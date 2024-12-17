import TemplateWrapper from "../../component/shared/TemplateWrapper";
import Ecertificates from "../../component/TemplateSection/Emon/Ecertificates";
import EEducation from "../../component/TemplateSection/Emon/EEducation";
import Experience from "../../component/TemplateSection/Emon/EExperience";
import EHeader from "../../component/TemplateSection/Emon/EHeader";
import ELanguages from "../../component/TemplateSection/Emon/ELanguages";
import Eskills from "../../component/TemplateSection/Emon/Eskills";
import Esummery from "../../component/TemplateSection/Emon/Esummery";

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
      component: EEducation,
    },
    Language: {
      name: "Language",
      component: ELanguages,
    },
    Certificate: {
      name: "Certificate",
      component: Ecertificates,
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
