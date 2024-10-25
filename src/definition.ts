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

export type ValidationErrors = Record<string, string[] | undefined>;

export type AuthenticateReturn = ValidationErrors | string | undefined | void;

export interface TextInputProps {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  error?: ValidationErrors | undefined;
}
