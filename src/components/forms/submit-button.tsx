import LoadingSpinner from "../ui/loading-spinner";

export default function SubmitButton({
  isSubmitting,
  text,
}: {
  text: string;
  isSubmitting: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80 disabled:cursor-not-allowed disabled:bg-gold/50"
    >
      {text}
      {isSubmitting && <LoadingSpinner />}
    </button>
  );
}
