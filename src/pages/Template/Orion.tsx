import Education from "../../component/TemplateSection/TemplateTwo/Education";
import Experience from "../../component/TemplateSection/TemplateTwo/Experience";
import Header from "../../component/TemplateSection/TemplateTwo/Header";
import Languages from "../../component/TemplateSection/TemplateTwo/Languages";
import Skill from "../../component/TemplateSection/TemplateTwo/Skill";
import Summery from "../../component/TemplateSection/TemplateTwo/Summary";

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
