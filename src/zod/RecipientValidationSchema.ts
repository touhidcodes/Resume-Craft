import { z } from "zod";

export const recipientValidation = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position is too long"),
  companyName: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name is too long"),
  companyEmail: z
    .string()
    .email("Invalid company email address")
    .nonempty("Company email is required"),
  companyWebsite: z
    .string()
    .url("Invalid URL format for company website")
    .nonempty("Company website is required"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address is too long"),
});
