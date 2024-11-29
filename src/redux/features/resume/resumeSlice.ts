import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: {
    templateId: "b3f932pae3fba893",
    userId: "b3f932pae3fba893",
    resumeName: "John Doe's Resume",
    allSections: [
      { name: "Summary", isActive: true },
      { name: "Experience", isActive: true },
      { name: "Skills", isActive: true },
      { name: "Education", isActive: true },
      { name: "Language", isActive: true },
      { name: "Certificate", isActive: true },
      { name: "Awards", isActive: true },
    ],
    personalInfo: {
      id: "b3f932pae3fba893",
      firstName: "John",
      lastName: "Doe",
      location: "San Francisco, CA",
      title: "Software Engineer",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    summary:
      "<p>Experienced Software Engineer with a strong background in web development and software solutions. Passionate about building innovative applications using modern technologies.</p>",
    hobby: ["Coding", "Reading", "Travelling"],
    skills: [
      {
        id: "b3f932pae3fba893",
        category: "Programming Languages",
        skill: ["JavaScript", "Python", "Java"],
      },
      {
        id: "c4f932pae3fba894",
        category: "Web Development",
        skill: ["HTML", "CSS", "React"],
      },
    ],
    experience: [
      {
        id: "b3f932pae3fba893",
        companyName: "TechCorp",
        jobTitle: "Senior Developer",
        startDate: "2020-06-01T00:00:00Z",
        endDate: "2020-06-01T00:00:00Z",
        location: "San Francisco, CA",
        responsibilities:
          "<ol><li>Educated patients on their conditions and prescribed medications</li><li>Educated patients on their conditions and prescribed medications</li></ol>",
      },
      {
        id: "d5f932pae3fba895",
        companyName: "InnovateX",
        jobTitle: "Frontend Developer",
        startDate: "2018-03-01T00:00:00Z",
        endDate: "2020-05-30T00:00:00Z",
        location: "Los Angeles, CA",
        responsibilities:
          "<ul><li>Educated patients on their conditions and prescribed medications</li><li>Educated patients on their conditions and prescribed medications</li></ul>",
      },
    ],
    education: [
      {
        id: "b3f932pae3fba893",
        institution: "University of Tech",
        fieldOfStudy: "BSc in Computer Science",
        startDate: "2016-09-01T00:00:00Z",
        endDate: "2020-05-15T00:00:00Z",
        location: "Boston, MA",
        description: "Studied various programming languages and algorithms.",
      },
      {
        id: "d5f932pae3fba895",
        institution: "Tech University",
        fieldOfStudy: "MSc in Data Science",
        startDate: "2021-09-01T00:00:00Z",
        endDate: "2023-05-15T00:00:00Z",
        location: "San Francisco, CA",
        description: "Focused on machine learning, big data, and AI research.",
      },
    ],
    language: [
      {
        name: "English",
        proficiency: "Native",
      },
      {
        name: "Spanish",
        proficiency: "Intermediate",
      },
    ],
    award: [
      {
        id: "b3f932pae3fba893",
        name: "Employee of the Year",
        organization: "TechCorp",
        year: 2022,
        description:
          "Recognized for outstanding contributions to the software development team.",
      },
      {
        id: "d5f932pae3fba896",
        name: "Best Innovator",
        organization: "InnovateX",
        year: 2021,
        description:
          "Awarded for innovative contributions to the company's tech solutions.",
      },
    ],
    certificate: [
      {
        id: "b3f932pae3fba893",
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        issueDate: "2023-01-10T00:00:00Z",
        expirationDate: "2026-01-10T00:00:00Z",
        credentialId: "ABC123456",
      },
      {
        id: "d5f932pae3fba897",
        name: "Google Certified Professional Cloud Architect",
        issuer: "Google Cloud",
        issueDate: "2023-04-15T00:00:00Z",
        expirationDate: "2026-04-15T00:00:00Z",
        credentialId: "XYZ123456",
      },
    ],
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateActiveSection: (state, action) => {
      state.resume.allSections = state.resume.allSections.map((item) =>
        item.name === action.payload.name
          ? { ...item, isActive: !action.payload.isActive }
          : item
      );
    },

    setActiveSections: (state, action) => {
      state.resume.allSections = action.payload;
    },
  },
});

export const { updateActiveSection, setActiveSections } = resumeSlice.actions;

export default resumeSlice.reducer;
