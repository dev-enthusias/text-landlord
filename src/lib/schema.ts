import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must include at least one number" })
      .regex(/[@$!%*?&#]/, {
        message: "Password must include at least one special character",
      }),
    confirm_password: z
      .string()
      .min(8, { message: "Confirm Password must be eight characters long" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

export const forgotPasswordSchema = z.object({
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
      .min(8, { message: "Password should be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must include at least one number" })
      .regex(/[@$!%*?&#]/, {
        message: "Password must include at least one special character",
      }),
    confirm_password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"], // specify the path of the error
    message: "New Password and Confirm Password do not match",
  });

export const addPropertySchema = z.object({
  name: z.string().min(1, { message: "Please input property name" }),
  type: z.string().min(1, { message: "Please select property type" }),
  default_image: z.custom<FileList>(),
  address: z.string().min(1, { message: "Please input property address" }),
  country_id: z.number().min(1, { message: "Please select country" }),
  state_id: z.number().min(1, { message: "Please select state" }),
  city_id: z.number().min(1, { message: "Please select city" }),
  property_category_id: z
    .number()
    .min(1, { message: "Please select property category" }),
});

export const addTenantSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "Invalid phone number format",
    )
    .optional()
    .or(z.literal("")),
  gender: z.enum(["Male", "Female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .optional()
    .or(z.literal("")),
  passport: z
    .string()
    .min(5, "Passport/ID must be at least 5 characters")
    .optional()
    .or(z.literal("")),
  designation: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .optional()
    .or(z.literal("")),
  institution: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .optional()
    .or(z.literal("")),
  nid: z
    .string()
    .min(10, "National ID must be at least 10 characters")
    .optional()
    .or(z.literal("")),
});
