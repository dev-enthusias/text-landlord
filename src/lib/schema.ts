import * as z from "zod";

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

export const createAdvertSchema = z.object({
  advertisement_type: z.coerce.number(),
  rent_type: z.coerce.number(),
});

export const changePasswordSchema = z
  .object({
    password: z.string().min(1, { message: "Input your old password" }),
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
  type_id: z.number().min(1, { message: "Please select property type" }),
  default_image: z.custom<FileList>(),
  address: z.string().min(1, { message: "Please input property address" }),
  country_id: z.number().min(1, { message: "Please select country" }),
  state_id: z.number().min(1, { message: "Please select state" }),
  city_id: z.number().min(1, { message: "Please select city" }),
  property_category_id: z
    .number()
    .min(1, { message: "Please select property category" }),
  rent_amount: z.string().min(1, { message: "Please input rent amount" }),
  grace_period: z.number().min(1, { message: "Please select a grace period" }),
  caution_fee: z
    .string()
    .transform((val) => parseInt(val.replace("%", ""), 10))
    .refine((num) => !isNaN(num) && num >= 0 && num <= 100, {
      message: "Value must be a number between 0 and 100",
    }),
});

export const bookAppointmentSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  property_address: z.string(),
  message: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Invalid date format, expected YYYY-MM-DD",
  }),
  time: z.string().regex(/^\d{2}:\d{2}$/, {
    message: "Invalid time format, expected HH:MM",
  }),
  property_id: z.number(),
  property_owner_id: z.number(),
});

export const addAccountSchema = z.object({
  business_name: z.string().min(1, { message: "Please input business name" }),
  bank_code: z.string().min(1, { message: "Select a bank" }),
  account_number: z.string().min(1, { message: "Please input account number" }),
});

export const addGalleryPhotoSchema = z.object({
  image: z.custom<FileList>().optional(),
});

export const basicPropertyInfoSchema = z.object({
  name: z.string().min(1, { message: "Please input property name" }),
  type: z.coerce.number(),
  description: z
    .string()
    .min(1, { message: "Please input property description" }),
  flat_no: z.string().optional(),
  rent_amount: z.string().min(1, { message: "Please input rent amount" }),
  bathroom: z.coerce
    .number()
    .int()
    .positive({ message: "Number of bathrooms must be a positive integer" })
    .min(1, { message: "Please input number of bathrooms" })
    .nullable()
    .or(z.literal("")),
  bedroom: z.coerce
    .number()
    .int()
    .positive({ message: "Number of bedrooms must be a positive integer" })
    .min(1, { message: "Please input number of bedrooms" })
    .or(z.literal("")),
  size: z.coerce
    .number()
    .positive({ message: "Property size must be a positive number" })
    .min(1, { message: "Please input property size" }),
  completion: z.coerce.number(),
});

export const addTenantSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  property_id: z.coerce
    .number()
    .min(1, { message: "Please select a property" }),
});

export const addAgentSchema = z.object({
  agent_id: z.coerce.number().min(1, { message: "Select an agent" }),
  property_id: z.coerce
    .number()
    .min(1, { message: "Please select a property" }),
  commission: z.string().min(1, { message: "Please input commission" }),
  end_date: z.string().min(1, { message: "Please input end date" }),
});

export const waitListSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be less than 50 characters" }),
  last_name: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().min(11, { message: "Phone number is required" }),
});

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .nullable()
    .or(z.literal("")),
  email: z.string().email("Invalid email address").nullable(),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "Invalid phone number format",
    )
    .nullable()
    .or(z.literal("")),
  gender: z
    .enum(["male", "female"], {
      errorMap: () => ({ message: "Please select a valid gender" }),
    })
    .optional(),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date")
    .nullable()
    .or(z.literal("")),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .nullable()
    .or(z.literal("")),
  passport: z
    .string()
    .min(5, "Passport/ID must be at least 5 characters")
    .nullable()
    .or(z.literal("")),
  designation: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .nullable()
    .or(z.literal("")),
  institution: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .nullable()
    .or(z.literal("")),
  nid: z
    .string()
    .min(10, "National ID must be at least 10 characters")
    .nullable()
    .or(z.literal("")),
});
