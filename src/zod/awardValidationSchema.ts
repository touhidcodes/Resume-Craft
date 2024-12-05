import { z } from "zod";

export const AwardValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  organization: z.string().min(1, "Organization is required"),
  year: z.number().int().min(4, "Year is required"),
  description: z.string().optional(),
});
