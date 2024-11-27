import Layout from "../shared/Layout";
import AccordionItem from "../shared/AccordionItem";

const faqItems = [
  {
    id: 201,
    title: "Do I need a different resume for every different job application?",
    description:
      "Every time you apply for a new job, you should make sure the resume speaks directly to the job description. That means, your resume may not need to be entirely different, but you’ll likely want to make at least a few minor updates. If you’re applying for a different type of job, you may want a completely different resume, from the content all the way to the format. With all the different templates to choose from, take advantage of our resume builder and create a variety of resumes to fit both your personality and your different job applications.",
  },
  {
    id: 202,
    title: "How do I choose the right resume template?",
    description:
      "Choosing the right resume template mostly comes down to personal preference. Granted, if you’re applying for a job in finance, you may not want an abstract-leaning format like a graphic designer may use. So, as you browse through all the resume templates while you build your resume, think about what potential employers may expect to see, then pick the resume that fits both your personality and career goals.",
  },
  {
    id: 203,
    title:
      "Free resume builder doesn’t usually mean free. Does Resume.com sell my information?",
    description:
      "Absolutely not. Our resume builder is completely free. From creating an account to uploading your resume to downloading and printing, you’ll never pay a dime. Your information is all secure and we will not sell to anyone.",
  },
  {
    id: 204,
    title: "What does ATS-friendly mean?",
    description:
      "ATS stands for Applicant Tracking System. An ATS is generally used by employers to process resumes. Most likely, when you’ve applied for jobs, they’ve asked you to upload a resume that you then have to painstakingly update. ATS-friendly means our resumes are ready to go through an ATS correctly so you don’t have to worry about reuploading all the same information.",
  },
  {
    id: 205,
    title: "Can I have my resume reviewed when I’ve finished building?",
    description:
      "Not only can you, you should! It’s always a great idea to get another set of eyes on your resume to check for typos, mistakes, or areas for improvement. Our resume builder will provide tips and advice throughout and when you’re done, you can run through our automated resume reviewer.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl lg:text-5xl font-extrabold my-5">
            Got <br /> Questions?
          </h1>
          <p className="text-sm md:text-base">
            Looking for guidance on how to optimize your resume, choose the
            right template, or ensure it passes ATS screenings? Our FAQ section
            has you covered with answers to frequently asked questions.
          </p>
        </div>
        <div className="lg:col-span-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index * item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
