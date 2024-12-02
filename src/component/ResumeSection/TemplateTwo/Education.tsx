import EducationEditModal from "../../Modal/EditModal/EducationEditModal";

const Education = () => {
  return (
    <div className="cursor-pointer mb-5 border border-transparent hover:border-dashed hover:border-primary relative">
      <h1 className="text-[20px] leading-[30px] font-semibold mb-1">
        Education
      </h1>

      <div className=" text-[#6E6E6E] text-[13px] space-y-2">
        {[...Array(2)].map((experince, index) => (
          <div
            key={index}
            className="text-neutral-600 group hover:bg-[#f8f9fa] duration-100 ease-in-out transition-all leading-[17px] relative"
          >
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3 className="">Emonics</h3>
              <span className="w-0.5 h-3.5 bg-neutral-600"></span>
              <h3>Dhaka Mirpur 12204</h3>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-[14px]">
              <h3>Frontend Developer </h3>
              <span className="w-0.5 h-3.5 bg-neutral-600"></span>
              <span>01/2024</span>
              <span>-</span>
              <span> 05/2024</span>
            </div>
            <ul className="list-disc list-inside text-[#6E6E6E]">
              <li>
                Educated patients on their conditions and prescribed medications
              </li>
              <li>
                Educated patients on their conditions and prescribed medications
              </li>
            </ul>
            <EducationEditModal />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
