import { EmailOutlined, LocationCityOutlined } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { useAppSelector } from "../../../redux/hooks";
import HeaderEditModal from "../../Modal/CoverLetter/HeaderEditModal";

const Header = () => {
  const personalInfo = useAppSelector(
    (state) => state.coverLetter.coverLetter?.personalInfo
  );

  return (
    <div className="cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group">
      <h1 className="text-2xl font-semibold">{personalInfo?.fullName}</h1>
      <p>{personalInfo?.jobTitle}</p>
      <div className="flex items-center justify-between text-sm mt-3">
        <p className="flex items-center gap-x-2">
          <LocalPhoneIcon fontSize="small" /> <span>{personalInfo?.phone}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <EmailOutlined fontSize="small" /> <span>{personalInfo?.email}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <LocationCityOutlined fontSize="small" />
          <span>{personalInfo?.location}</span>
        </p>
      </div>

      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Header;
