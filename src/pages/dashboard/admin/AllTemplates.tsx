import { useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";
import AdminActionButton from "../../../component/dashboard/adminDashboard/AdminActionButoon";
import { Key } from "react";

const AllTemplates = () => {
  const { data: allTemplates, isLoading } = useGetAllTemplatesQuery("");
  console.log(allTemplates?.data);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-3 cursor-pointer">
          {allTemplates?.data?.map(
            (
              template: {
                id: string;
                image: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <div key={index}>
                <div className="bg-[#f2f1ffcf] p-5 mb-3">
                  <img
                    src={template.image}
                    alt="user's resume"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">{template.name}</h3>
                  </div>
                  <AdminActionButton id={template.id} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllTemplates;
