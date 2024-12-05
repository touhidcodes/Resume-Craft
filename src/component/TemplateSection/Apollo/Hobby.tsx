import { useAppSelector } from "../../../redux/hooks";

const Hobby = () => {
  const hobbies = useAppSelector((state) => state.resume.resume?.hobby);
  return (
    <div className="cursor-pointer group border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">Hobby</h1>
      <div className="w-[100%] h-[2px] bg-gray-400 mb-1"></div>
      <p className="text-sm text-[#6E6E6E]">{hobbies?.join(", ")}</p>
    </div>
  );
};

export default Hobby;
