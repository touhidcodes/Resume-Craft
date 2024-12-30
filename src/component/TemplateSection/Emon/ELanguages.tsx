import { useAppSelector } from "../../../redux/hooks";
import LanguagesEditModal from "../../Modal/EditModal/LanguagesEditModel";

const ELanguages = () => {
  const languages = useAppSelector((state) => state?.resume?.resume?.language);

  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative break-inside-avoid font-lato">
      <div className="flex items-end mb-3">
        <h1 className="text-[20px] leading-[25px] font-semibold mb-1">
          Languages
        </h1>
        <div className="w-[100%] h-[0.5px] bg-[#000] "></div>
      </div>

      <div className="space-x-10 flex items-center">
        {languages?.map((language) => (
          <div
            key={language.name}
            className="break-inside-avoid text-[#000] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative duration-100 ease-in-out transition-all"
          >
            <p>
              <span className="font-semibold">{language.name} : </span>
              {language.proficiency}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <LanguagesEditModal />
      </div>
    </div>
  );
};

export default ELanguages;