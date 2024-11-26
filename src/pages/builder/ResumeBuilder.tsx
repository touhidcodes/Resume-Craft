import { Route, Routes } from "react-router-dom";
import CustomTemplate from "../../pages/Resume/Temple1/CustomTemplate";
import ResumeBuilderNavbar from "../../component/NavBar/ResumeBuilderNavbar";
import ResumeBuilderSidebar from "../../component/layout/ResumeBuilderSidebar";
import MultipleSelect from "../../component/builder/MultipleSelect";

const Template1 = () => {
  return <div className="text-3xl mt-10">Template 1</div>;
};
const Template2 = () => {
  return <div className="text-3xl mt-10">Template 2</div>;
};

const ResumeBuilder = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto min-h-svh py-10 flex gap-5">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-10 text-center">My Resume</h1>
        <ResumeBuilderNavbar />
        <Routes>
          <Route path="/custom" Component={CustomTemplate} />
          {[
            {
              id: `template-${Date.now()}`,
              name: "template-1",
              component: Template1,
            },
            {
              id: `template-${Date.now()}`,
              name: "template-2",
              component: Template2,
            },
          ].map((template) => (
            <Route
              key={template.id}
              path={`/${template.name}`}
              Component={template.component}
            />
          ))}
        </Routes>
      </div>
      <ResumeBuilderSidebar />
    </div>
  );
};

export default ResumeBuilder;
