import { z } from "zod";
import { Path, UseFormRegister } from "react-hook-form";
import {
  changePasswordSchema,
  forgtotPasswordSchema,
  loginSchema,
} from "./lib/schema";

export type SidebarNavLinks = {
  name: string;
  icon: JSX.Element;
  href: string;
  exact: boolean;
}[];

export type TrxButtonProps = {
  text: string;
  link: string;
  type: string;
}[];

export type RoleType = {
  role: "landlord" | "agent" | "tenant";
};

export interface TextInputProps {
  label: string;
  name: Path<any>;
  required?: boolean;
  type?: string;
  error?: string;
  register: UseFormRegister<any>;
}

export type TenantPropertyCardTypes = {
  type?: "order" | "rent" | "wishlist";
  roleid?: number;
};

export type LoginDataType = z.infer<typeof loginSchema>;

export type ForgotPasswordDataType = z.infer<typeof forgtotPasswordSchema>;

export type ChangePasswordDataType = z.infer<typeof changePasswordSchema>;
