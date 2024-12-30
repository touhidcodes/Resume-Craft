import { Route, Routes } from "react-router-dom";
import { useGetAllTemplatesQuery } from "../redux/features/template/templateApi";
import Apollo from "../pages/Template/Apollo";
import Orion from "../pages/Template/Orion";
import Delta from "../pages/Template/Delta";
import { Template, TemplateRoute } from "../types";
import Emon from "../pages/Template/Emon";

type TemplateData = {
  id: string;
  name: string;
};

const templates: Template[] = [
  { name: "Apollo", component: Apollo },
  { name: "Orion", component: Orion },
  { name: "Delta", component: Delta },
  { name: "Emon", component: Emon },
];

const TemplateRoutes = () => {
  const { isLoading, data } = useGetAllTemplatesQuery(null);

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

export default TemplateRoutes;
