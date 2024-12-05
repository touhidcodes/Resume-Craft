import LanguagesEditModel from "../../Modal/EditModal/LanguagesEditModel";

const Languages = () => {
  return (
    <div className="cursor-pointer  group  mb-5  border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Languages
      </h1>

      <div className=" text-[#6E6E6E] text-[13px]  group-hover:bg-[#f8f9fa] cursor-pointer relative  duration-100 ease-in-out transition-all ">
        <p>Engilsh , Hinde , Bangla </p>
      </div>

      {/* <LanguagesEditModel /> */}
    </div>
  );
};

export default Languages;
