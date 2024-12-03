import Education from "../../../component/ResumeSection/Orion/Education";
import Experience from "../../../component/ResumeSection/Orion/Experience";
import Header from "../../../component/ResumeSection/Orion/Header";
import Languages from "../../../component/ResumeSection/Orion/Languages";
import Skill from "../../../component/ResumeSection/Orion/Skill";
import Summery from "../../../component/ResumeSection/Orion/Summary";

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
