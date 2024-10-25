import { cn } from "@/utils/cn";

export default function Modal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full fixed left-0 top-0 z-[100000px] min-h-screen w-screen bg-black/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
