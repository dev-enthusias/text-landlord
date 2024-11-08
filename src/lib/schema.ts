import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const forgtotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(1, { message: "Input your old password" }),
    new_password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"], // specify the path of the error
    message: "New Password and Confirm Password do not match",
  });
