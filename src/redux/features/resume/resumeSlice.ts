// type TResume

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: {
    id: "646ef3b5ad1d3e2b1458f960",
    userId: "646ef3b5ad1d3e2b1458f961",
    templateId: "template_001",
    allSections: [
      { name: "Summary", isActive: true },
      { name: "Experience", isActive: true },
      { name: "Skills", isActive: true },
      { name: "Education", isActive: false },
      { name: "Language", isActive: false },
      { name: "Certificate", isActive: false },
      { name: "Awards", isActive: false },
    ],
    personalInfo: {
      fullName: "John Doe",
      jobTitle: "Software Engineer",
      contact: {
        email: "john.doe@example.com",
        phone: "+1234567890",
        website: "https://johndoe.dev",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
      },
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA",
      },
    },
    profileSummary:
      "Passionate Software Engineer with 5+ years of experience in full-stack development and cloud computing.",
    design: {
      font: "Arial",
      themeColor: "#4CAF50",
      backgroundColor: "#FFFFFF",
      sectionStyles: {
        header: {
          fontSize: "24px",
          color: "#000000",
        },
        titles: {
          fontSize: "18px",
          color: "#4CAF50",
        },
      },
    },
    lastUpdated: "2024-11-24T12:00:00Z",
    WorkExperience: {
      id: "646ef3b5ad1d3e2b1458f962",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Professional",
      title: "Work Experience",
      items: [
        {
          companyName: "TechCorp",
          jobTitle: "Senior Developer",
          startDate: "2020-06-01T00:00:00Z",
          endDate: null,
          isCurrent: true,
          location: "San Francisco, CA",
          responsibilities: [
            "Developed scalable web applications using React and Node.js.",
            "Led a team of developers in Agile sprints.",
            "Improved application performance by 30%.",
          ],
        },
        {
          companyName: "Tech B",
          jobTitle: "Senior Developer",
          startDate: "2020-06-01T00:00:00Z",
          endDate: null,
          isCurrent: true,
          location: "San Francisco, CA",
          responsibilities: [
            "Developed scalable web applications using React and Node.js.",
            "Led a team of developers in Agile sprints.",
            "Improved application performance by 30%.",
          ],
        },
      ],
    },
    Education: {
      id: "646ef3b5ad1d3e2b1458f963",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Academic",
      title: "Education",
      items: [
        {
          institution: "University of Tech",
          degree: "BSc in Computer Science",
          startDate: "2016-09-01T00:00:00Z",
          endDate: "2020-05-15T00:00:00Z",
          location: "Boston, MA",
          description:
            "Graduated with honors, focusing on software engineering and AI.",
        },
      ],
    },
    Skill: {
      id: "646ef3b5ad1d3e2b1458f964",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Technical",
      title: "Skills",
      items: [
        {
          category: "Programming Languages",
          skills: ["JavaScript", "Python", "Java"],
        },
        {
          category: "Tools",
          skills: ["Git", "Docker", "Jenkins"],
        },
      ],
    },
    Certification: {
      id: "646ef3b5ad1d3e2b1458f965",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Professional",
      title: "Certifications",
      items: [
        {
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          issueDate: "2023-01-10T00:00:00Z",
          expirationDate: "2026-01-10T00:00:00Z",
          credentialId: "ABC123456",
        },
      ],
    },
    Project: {
      id: "646ef3b5ad1d3e2b1458f966",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Development",
      title: "Projects",
      items: [
        {
          name: "Portfolio Website",
          description:
            "Built a personal portfolio website to showcase projects and skills.",
          technologies: ["React", "Tailwind CSS", "Vercel"],
          role: "Developer",
          link: "https://johndoe.dev",
        },
      ],
    },
    Award: {
      id: "646ef3b5ad1d3e2b1458f967",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Recognition",
      title: "Awards",
      items: [
        {
          name: "Employee of the Year",
          organization: "TechCorp",
          year: 2022,
          description:
            "Recognized for outstanding performance and contributions.",
        },
      ],
    },
    Language: {
      id: "646ef3b5ad1d3e2b1458f968",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Linguistic",
      title: "Languages",
      items: [
        {
          name: "English",
          proficiency: "Native",
        },
        {
          name: "Spanish",
          proficiency: "Intermediate",
        },
      ],
    },
    Hobby: {
      id: "646ef3b5ad1d3e2b1458f969",
      templateId: "646ef3b5ad1d3e2b1458f960",
      type: "Personal",
      title: "Hobbies",
      items: ["Photography", "Cycling", "Chess"],
    },
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateActiveSection: (state, action) => {
      const activeSections = state.resume.allSections; // Copy of original sections

      // Find index for updated section
      const findIndexOfSection = state.resume.allSections.findIndex(
        (section) => section.name === action.payload.name
      );

      activeSections[findIndexOfSection] = {
        ...action.payload,
        isActive: !action.payload.isActive,
      };
    },
  },
});

export const { updateActiveSection } = resumeSlice.actions;

export default resumeSlice.reducer;
