import { Route, Routes } from "react-router-dom";
import ResumeBuilderNavbar from "../NavBar/ResumeBuilderNavbar";
import ResumeBuilderSidebar from "./ResumeBuilderSidebar";

const Template1 = () => {
  return <div className="text-3xl mt-10">Template 1</div>;
};
const Template2 = () => {
  return <div className="text-3xl mt-10">Template 2</div>;
};

const CustomResume = () => {
  return <div className="text-3xl mt-10">Custom Resume</div>;
};

const ResumeBuilderLayout = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto min-h-svh py-10 flex gap-5">
      <div className="flex-1">
        <ResumeBuilderNavbar />
        <Routes>
          <Route path="/custom" Component={CustomResume} />
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

export default ResumeBuilderLayout;
