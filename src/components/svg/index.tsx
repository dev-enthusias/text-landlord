import { cn } from "@/utils/cn";

interface Props {
  className?: string;
}

export function Arrow({ className }: Props) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M8 17L3 12M3 12L8 7M3 12H21"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
