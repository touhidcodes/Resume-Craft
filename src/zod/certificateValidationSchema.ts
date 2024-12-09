import { z } from "zod";

export const certificateValidationSchema = z.object({
  name: z.string().min(1, "Certificate name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  issueDate: z.string().min(1, "Issue date is required"),
  expirationDate: z.string().optional(),
  certificateLink: z.string().optional(),
});
