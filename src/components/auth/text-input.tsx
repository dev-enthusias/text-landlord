export default function TextInput({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={label} className="block font-semibold text-gray-600">
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </label>
      <input
        type="text"
        className="relative w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
