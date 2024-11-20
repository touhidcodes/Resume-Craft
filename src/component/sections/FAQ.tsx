import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Layout from "../shared/Layout";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl mb-10 text-center font-bold">
        Frequently Asked Questions
      </h1>
      <div className="md:px-28">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          s
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ fontSize: "18px" }}>
              Do I need a different resume for every different job application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Every time you apply for a new job, you should make sure the
              resume speaks directly to the job description. That means, your
              resume may not need to be entirely different, but you’ll likely
              want to make at least a few minor updates. If you’re applying for
              a different type of job, you may want a completely different
              resume, from the content all the way to the format. With all the
              different templates to choose from, take advantage of our resume
              builder and create a variety of resumes to fit both your
              personality and your different job applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ fontSize: "18px" }}>
              How do I choose the right resume template?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Choosing the right resume template mostly comes down to personal
              preference. Granted, if you’re applying for a job in finance, you
              may not want an abstract-leaning format like a graphic designer
              may use. So, as you browse through all the resume templates while
              you build your resume, think about what potential employers may
              expect to see, then pick the resume that fits both your
              personality and career goals.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: "18px" }}>
              Free resume builder doesn’t usually mean free. Does Resume.com
              sell my information?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely not. Our resume builder is completely free. From
              creating an account to uploading your resume to downloading and
              printing, you’ll never pay a dime. Your information is all secure
              and we will not sell to anyone.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: "18px" }}>
              What does ATS-friendly mean?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ATS stands for Applicant Tracking System. An ATS is generally used
              by employers to process resumes. Most likely, when you’ve applied
              for jobs, they’ve asked you to upload a resume that you then have
              to painstakingly update. ATS-friendly means our resumes are ready
              to go through an ATS correctly so you don’t have to worry about
              reuploading all the same information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ fontSize: "18px" }}>
              Can I have my resume reviewed when I’ve finished building?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Not only can you, you should! It’s always a great idea to get
              another set of eyes on your resume to check for typos, mistakes,
              or areas for improvement. Our resume builder will provide tips and
              advice throughout and when you’re done, you can run through our
              automated resume reviewer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Layout>
  );
};

export default FAQ;
