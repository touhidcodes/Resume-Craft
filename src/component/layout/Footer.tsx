import AppleStore from "../icons/AppleStore";
import PlayStore from "../icons/PlayStore";
import Layout from "../shared/Layout";
import { FacebookOutlined, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Layout>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Job Seekers</h2>
            <ul className="mt-8 space-y-3">
              <li>Build a Resume</li>
              <li>Samples</li>
              <li>Cover Letters Samples</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Need Help?</h2>
            <ul className="mt-8 space-y-3">
              <li>Help Center</li>
              <li>About Us</li>
              <li>Sitemaps</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Stay Connected</h2>
            <div className="space-x-5 mt-8">
              <FacebookOutlined sx={{ fontSize: "35px" }} />
              <Instagram sx={{ fontSize: "35px" }} />
            </div>
            <div className="mt-5 space-y-5">
              <AppleStore />
              <PlayStore />
            </div>
          </div>
        </div>
      </Layout>
      <div className="text-center pb-8 mt-8">
        <p>©All Rights Reserved by Resume Craft {new Date().getFullYear()}</p>
        <p className="text-sm">
          Designed & Developed By{" "}
          <span className="text-primary">Code Titans</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
