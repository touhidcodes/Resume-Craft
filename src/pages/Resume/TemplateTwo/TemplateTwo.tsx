import Education from "../../../component/ResumeSection/TemplateTwo/Education";
import Experience from "../../../component/ResumeSection/TemplateTwo/Experience";
import Header from "../../../component/ResumeSection/TemplateTwo/Header";
import Languages from "../../../component/ResumeSection/TemplateTwo/Languages";
import Skill from "../../../component/ResumeSection/TemplateTwo/Skill";
import Summery from "../../../component/ResumeSection/TemplateTwo/Summary";

const TemplateTwo = () => {
  return (
    <div className="min-h-[590px] max-w-[750px] mx-auto py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      <Header />
      <Summery />
      <Experience />
      <Education></Education>
      <Skill />
      <Languages />
    </div>
  );
};

export default TemplateTwo;
