import { useAppSelector } from "../../../redux/hooks";
import HobbyEditModal from "../../Modal/EditModal/HobbyEditModal";

const Hobby = () => {
  const hobbies = useAppSelector((state) => state.resume.resume?.hobby);
  return (
    <div className="cursor-pointer border border-transparent hover:border-dashed hover:border-primary relative group break-inside-avoid">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">Hobby</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <p className="text-sm text-[#6E6E6E]">{hobbies?.join(", ")}</p>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HobbyEditModal hobby={hobbies} />
      </div>
    </div>
  );
};

export default Hobby;
