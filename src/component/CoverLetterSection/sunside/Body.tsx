import { Edit } from "@mui/icons-material";

const Body = () => {
  return (
    <div className="text-[13px] leading-[20px] space-y-4 text-[#6E6E6E] group  mb-5  border border-transparent hover:border-dashed hover:border-primary relative cursor-pointer">
      <p>Dear [Hiring Manager or Company],</p>

      <p>
        It is with great pleasure that I am applying for the Professional Sales
        position at [Company]. As a recent graduate of XYZ University, not only
        did I maintain excellent grades, but I was also a Captain of the Hockey
        team that won more games than any team in the past twelve years.
      </p>

      <p>
        My background has required me to be a strong manager of my time to
        balance school and athletics, which I am confident, will be a quality
        that will be important in this position. My years of working in a team
        environment, my strong competitive nature, as well as my success in
        leadership, are also qualities that I bring to my career.
      </p>

      <p>
        As a chosen team leader, I had to listen, motivate, think creatively,
        and delegate so together my teammates and I could achieve success. I
        have proven that I am passionate about what I do as well as dedicated.
        My goal is to join a company where there is growth potential, so I am
        sure I can fulfill that need of yours. My personality and competitive
        nature have made me realize that my skills will be beneficial in dealing
        with clients in sales.
      </p>
      <p>
        I am extremely passionate about the work in this profession and would be
        ecstatic to share my skills and experiences with your exceptional team.
        I appreciate your time and consideration and look forward to speaking
        with you soon.
      </p>

      <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm  group-hover:flex justify-center items-center rounded-[10px] absolute  top-[-10px] right-1 duration-100 ease-in-out transition-all">
        <Edit />
      </div>
    </div>
  );
};

export default Body;
