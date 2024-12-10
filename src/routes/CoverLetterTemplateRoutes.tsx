import { Route, Routes } from "react-router-dom";
import { Template, TemplateRoute } from "../types";
import { useGetAllCoverLetterTemplateQuery } from "../redux/features/template/templateApi";
import Alpha from "../pages/CoverLetter/Alpha";

type TemplateData = {
  id: string;
  name: string;
};

const templates: Template[] = [{ name: "Alpha", component: Alpha }];

const CoverLetterTemplateRoutes = () => {
  const { isLoading, data } = useGetAllCoverLetterTemplateQuery(null);

  if (isLoading) return null;

  const result: TemplateRoute[] = data?.data.reduce(
    (acc: TemplateRoute[], data: TemplateData) => {
      const template = templates.find(
        (template) => template.name === data.name
      );
      if (template) {
        acc.push({
          id: data.id,
          component: template.component,
        });
      }
      return acc;
    },
    []
  );

  return (
    <Routes>
      {result?.map((template) => (
        <Route
          key={template.id}
          path={`/${template.id}`}
          Component={template.component}
        />
      ))}
    </Routes>
  );
};

export default CoverLetterTemplateRoutes;
