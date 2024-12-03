import { z } from "zod";

export const headerValidationSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine(
    (val) => {
      const internationalPhonePattern =
        /^\+?\d{1,4}[\s\-]?\(?\d{1,5}\)?[\s\-]?\d{1,5}[\s\-]?\d{1,5}$/;
      return internationalPhonePattern.test(val);
    },
    {
      message: "Invalid phone number format",
    }
  ),
  location: z.string().min(1, { message: "Location is required" }),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});
