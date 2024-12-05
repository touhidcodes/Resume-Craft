import { Key } from "react";
import { useGetAllTemplatesQuery } from "../../../redux/features/template/templateApi";

const AllTemplates = () => {
  const { data: allTemplates, isLoading,  } = useGetAllTemplatesQuery("");

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
              template: { image: string | undefined },
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
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllTemplates;
