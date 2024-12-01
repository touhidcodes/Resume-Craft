export type Section = {
  name: string;
  isActive: boolean;
};

export type PersonalInfo = {
  id: string;
  fullName: string;
  location: string;
  jobTitle: string;
  email: string;
  phone: string;
};

export type Skill = {
  id: string;
  category: string;
  skills: string[];
};

export type Experience = {
  id: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string; // HTML formatted text
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
};

export type Language = {
  name: string;
  proficiency: string;
};

export type Award = {
  id: string;
  name: string;
  organization: string;
  year: number;
  description: string;
};

export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  credentialId: string;
};

export type ResumeInitialState = {
  templateId: string;
  userId: string;
  allSection: Section[];
  personalInfo: PersonalInfo;
  profileSummary: string; // HTML formatted text
  hobby: string[];
  Skill: Skill[];
  WorkExperience: Experience[];
  Education: Education[];
  language: Language[];
  Award: Award[];
  Certification: Certificate[];
};
