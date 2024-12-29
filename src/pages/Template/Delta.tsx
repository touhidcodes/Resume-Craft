import useActiveSections, {
    TResumeSections,
  } from "../../hooks/useActiveSections";
  import Awards from "../../component/TemplateSection/Delta/Awards";
  import Summary from "../../component/TemplateSection/Delta/Summary";
  import Experience from "../../component/TemplateSection/Delta/Experience";
  import Skill from "../../component/TemplateSection/Delta/Skill";
  import Languages from "../../component/TemplateSection/Delta/Languages";
  import Header from "../../component/TemplateSection/Delta/Header";
  import Education from "../../component/TemplateSection/Delta/Education";
  import TemplateWrapper from "../../component/shared/TemplateWrapper";
  import Certificates from "../../component/TemplateSection/Delta/Certificates";
  import Hobby from "../../component/TemplateSection/Delta/Hobby";
  
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
  
  const Delta = () => {
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
  
  export default Delta;
  