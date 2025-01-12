import { Check } from "lucide-react";

export default function CustomCheckbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  label?: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer absolute h-0 w-0 opacity-0"
        />
        <label
          htmlFor={id}
          className={`peer-checked border-grey-300 flex h-5 w-5 cursor-pointer items-center justify-center rounded border-2 bg-white transition-colors duration-200 peer-checked:border-gold peer-checked:bg-gold peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}
        >
          {checked && <Check className={`h-4 w-4 text-black`} />}
        </label>
      </div>
      {label && (
        <label
          htmlFor={id}
          className={`ml-2 font-medium text-gray-500 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} `}
        >
          {label}
        </label>
      )}
    </div>
  );
}
