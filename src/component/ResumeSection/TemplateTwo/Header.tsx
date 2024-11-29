import HeaderEditModal from "../../Modal/HeaderEditModal";

const Header = () => {
  return (
    <div className="font-roboto hover:bg-[#f8f9fa] cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
      <HeaderEditModal />

      <h1 className="text-[20px] leading-[30px] font-semibold ">
        Anonymous Dog
      </h1>

      <div className="flex gap-x-1  flex-col text-[#6E6E6E] text-[13px]">
        <p>Phone number</p>

        <p>Email@example.com</p>

        <p> City, State</p>
      </div>
    </div>
  );
};

export default Header;
