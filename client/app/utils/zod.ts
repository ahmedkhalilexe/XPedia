import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date of birth"),
});

export type SignInType = z.infer<typeof signInSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
