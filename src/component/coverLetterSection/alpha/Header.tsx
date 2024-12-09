import { EmailOutlined, LocationCityOutlined } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeaderEditModal from "../../Modal/CoverLetter/HeaderEditModal";

const Header = () => {
  const personalInfo = {
    fullName: "John Doe",
    jobTitle: "Software Developer",
    email: "johndoe@example.com",
    phone: "+123456789",
    website: "https://www.linkedin.com",
    linkedin: "https://www.linkedin.com/in/md-rifat-taluckdar/",
    github: "https://www.linkedin.com/in/md-rifat-taluckdar/",
    location: "USA NY New York 123 Main St 10001",
  };

  return (
    <div className="cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group">
      <h1 className="text-2xl font-semibold">{personalInfo.fullName}</h1>
      <p>{personalInfo.jobTitle}</p>
      <div className="flex items-center justify-between text-sm mt-3">
        <p className="flex items-center gap-x-2">
          <LocalPhoneIcon fontSize="small" /> <span>{personalInfo.phone}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <EmailOutlined fontSize="small" /> <span>{personalInfo.email}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <LocationCityOutlined fontSize="small" />
          <span>{personalInfo.location}</span>
        </p>
      </div>

      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <HeaderEditModal personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Header;
