export default function CutomeRadio({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer absolute h-0 w-0 opacity-0"
        />
        <label
          htmlFor={id}
          className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-2 border-yellow-400 bg-white transition-colors duration-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}
        >
          <span
            className={`h-2 w-2 rounded-full transition-transform duration-200 ${checked ? "scale-100 bg-yellow-400" : "scale-0 bg-transparent"} `}
          />
        </label>
      </div>
      {label && (
        <label
          htmlFor={id}
          className={`ml-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} `}
        >
          {label}
        </label>
      )}
    </div>
  );
}
