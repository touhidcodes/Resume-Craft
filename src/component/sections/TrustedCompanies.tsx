import Layout from "../shared/Layout";
import google from "../../assets/trusted-company/google.webp";
import apple from "../../assets/trusted-company/logo-apple.webp";
import bestbuy from "../../assets/trusted-company/logo-bestbuy.webp";
import cmu from "../../assets/trusted-company/logo-cmu.webp";
import costco from "../../assets/trusted-company/logo-costco.webp";
import deloitte from "../../assets/trusted-company/logo-deloitte.webp";
import georgiaTech from "../../assets/trusted-company/logo-georgia-tech.webp";
import ikea from "../../assets/trusted-company/logo-ikea.webp";
import lowes from "../../assets/trusted-company/logo-lowes.webp";
import mcdonalds from "../../assets/trusted-company/logo-mcdonalds.webp";
import stateFarm from "../../assets/trusted-company/logo-state-farm.webp";
import tesla from "../../assets/trusted-company/logo-tesla.webp";
import texas from "../../assets/trusted-company/logo-texas.webp";
import unilever from "../../assets/trusted-company/logo-unilever.webp";
import usNavy from "../../assets/trusted-company/logo-us-navy.webp";
import walmart from "../../assets/trusted-company/logo-walmart.webp";
import ups from "../../assets/trusted-company/ups.webp";

const trustedCompanies = [
  { id: 101, image: apple },
  { id: 102, image: bestbuy },
  { id: 103, image: cmu },
  { id: 104, image: costco },
  { id: 105, image: deloitte },
  { id: 106, image: georgiaTech },
  { id: 107, image: ikea },
  { id: 108, image: lowes },
  { id: 109, image: mcdonalds },
  { id: 110, image: stateFarm },
  { id: 111, image: tesla },
  { id: 112, image: texas },
  { id: 113, image: unilever },
  { id: 114, image: usNavy },
  { id: 115, image: walmart },
  { id: 116, image: google },
  { id: 117, image: ups },
];

const TrustedCompanies = () => {
  return (
    <Layout>
      <h3 className="text-xl text-center mb-10">
        Trusted by 6M+ professionals from companies across the world
      </h3>
      <div className="overflow-hidden flex items-center relative">
        <div className="h-20 w-full flex justify-between items-center absolute top-0 left-0 z-10">
          <div className="h-full w-32 bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"></div>
          <div className="h-full w-32 bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_left,black,transparent)]"></div>
        </div>
        <Companies />
        <Companies />
      </div>
    </Layout>
  );
};

const Companies = () => {
  return (
    <div className="flex items-center gap-x-10 md:gap-x-16 flex-nowrap min-w-fit pr-16 overflow-x-auto animate-scroll scrollbar">
      {trustedCompanies.map((company, index) => (
        <div key={index * company.id} className="shrink-0">
          <img
            src={company.image}
            alt="company logo"
            className="min-w-24 md:min-w-32 h-14 md:h-20 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TrustedCompanies;
