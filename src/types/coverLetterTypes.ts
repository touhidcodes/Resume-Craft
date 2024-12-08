import { PersonalInfo } from "./resumeTypes";

export type CoverLetterTemplate = {
  id: string;
  image: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  CoverLatter: CoverLetter[];
};

export type CoverLetter = {
  id: string;
  name: string;
  userId: string;
  templateId: string;
  personalInfo: PersonalInfo;
  body: string;
  closing: string;
  recipient: Recipient;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type Recipient = {
  name: string;
  email: string;
  position: string;
  companyName: string;
  companyEmail: string;
  companyWebsite?: string;
  address: string;
};
