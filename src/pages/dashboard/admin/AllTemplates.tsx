import {
  useGetAllCoverLetterTemplateQuery,
  useGetAllTemplatesQuery,
} from "../../../redux/features/template/templateApi";
import AdminActionButton from "../../../component/dashboard/adminDashboard/AdminActionButoon";
import { Helmet } from "react-helmet-async";
import AdminCoverLetterActionButton from "../../../component/dashboard/adminDashboard/AdminCoverLetterActionButton";

const AllTemplates = () => {
  const { data: allResumeTemplates } = useGetAllTemplatesQuery("");
  const { data: allCoverLetterTemplates, isLoading } =
    useGetAllCoverLetterTemplateQuery("");
  console.log(allCoverLetterTemplates);
  return (
    <div>
      <Helmet>
        <title>All Templates - Resume Craft</title>
      </Helmet>

      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Discover Professional Templates</h1>
        <p className="mt-3 text-lg">Browse our collection of resumes and cover letters to craft the perfect impression.</p>
      </div> */}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          {/* Modern Loader */}
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className=" mx-auto p-6">
          {/* Resume Templates Section */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            All Resume Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allResumeTemplates?.data?.map(
              (template: {
                id: string;
                image: string | undefined;
                name: string;
              }) => (
                <div
                  key={template.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
                >
                  <div className="bg-[#f2f1ffcf] p-5 mb-3">
                    <img
                      src={template.image}
                      alt="Resume Template"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold mt-4">
                      {template.name}
                    </h3>
                    <div className="mt-2 flex justify-end">
                      <AdminActionButton id={template.id} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-300"></div>

          {/* Cover Letter Templates Section */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            All Cover Letter Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCoverLetterTemplates?.data?.map(
              (template: {
                id: string;
                image: string | undefined;
                name: string;
              }) => (
                <div
                  key={template.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
                >
                  <div className="bg-[#f2f1ffcf] p-5 mb-3">
                    <img
                      src={template.image}
                      alt="Cover Letter Template"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold mt-4">
                      {template.name}
                    </h3>
                    <div className="mt-2 flex justify-end">
                      <AdminCoverLetterActionButton id={template.id} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTemplates;
