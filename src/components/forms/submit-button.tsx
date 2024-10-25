import { useFormStatus } from "react-dom";
import LoadingSpinner from "../ui/loading-spinner";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-primary/50"
    >
      {text}
      {pending && <LoadingSpinner />}
    </button>
  );
}
