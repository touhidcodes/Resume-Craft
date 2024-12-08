import { EmailOutlined, LocationCityOutlined } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Header = () => {
  return (
    <div className="cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <h1 className="text-2xl font-semibold">Rakib Ahmed</h1>
      <p>Frontend developer</p>
      <div className="flex items-center justify-between text-sm mt-3">
        <p className="flex items-center gap-x-2">
          <LocalPhoneIcon fontSize="small" /> <span>+880 17281273</span>
        </p>
        <p className="flex items-center gap-x-2">
          <EmailOutlined fontSize="small" /> <span>rakib@gmail.com</span>
        </p>
        <p className="flex items-center gap-x-2">
          <LocationCityOutlined fontSize="small" />{" "}
          <span>Chandpur Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
