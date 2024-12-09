import Header from "../../component/TemplateSection/Pinguin/Header";
import Skill from "../../component/TemplateSection/Pinguin/Skill";
import Summery from "../../component/TemplateSection/Pinguin/Summery";
import Expricence from "../../component/TemplateSection/Pinguin/Expricence";
import Education from "../../component/TemplateSection/Pinguin/Education";
import Languages from "../../component/TemplateSection/Pinguin/Languages";

const Pinguin = () => {
  return (
    <div className="min-h-[590px] max-w-[800px] mx-auto rounded-[9px] border my-[20px] grid grid-cols-4 sm:grid-cols-12">
      <div className="col-span-4 sm:col-span-3">
        <Header />
        <Skill />
      </div>
      <div className="col-span-4 sm:col-span-9">
        <div className="bg-white shadow  p-6">
          <Summery />

          <Expricence />
          <Education />

          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Pinguin;
