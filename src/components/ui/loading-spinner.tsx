import { cn } from "@/utils/cn";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-4 animate-spin rounded-full border-2 border-solid border-black border-t-transparent",
        className,
      )}
    />
  );
}
