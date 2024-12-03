import { Route, Routes } from "react-router-dom";
import { useGetAllTemplatesQuery } from "../redux/features/template/templateApi";
import Apollo from "../pages/Resume/Temple1/Apollo";

// Define types for template data
type Template = {
  name: string;
  component: React.ComponentType<any>;
};

type TemplateData = {
  id: string;
  name: string;
};

type TemplateRoute = {
  id: string;
  component: React.ComponentType<any>;
};

const templates: Template[] = [{ name: "Apollo", component: Apollo }];

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
