import { z } from "zod";

export const registerFormSchema = z
  .object({
    firstname: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .max(50, { message: "First name cannot exceed 50 characters" })
      .regex(/^[a-zA-Z]+$/, { message: "First name can only contain letters" }),

    lastname: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(50, { message: "Last name cannot exceed 50 characters" })
      .regex(/^[a-zA-Z]+$/, { message: "Last name can only contain letters" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .max(100, { message: "Email cannot exceed 100 characters" }),

    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        {
          message:
            "Password must include uppercase, lowercase, number, and special character",
        }
      )
      .min(8, { message: "Password must be at least 8 characters" }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
