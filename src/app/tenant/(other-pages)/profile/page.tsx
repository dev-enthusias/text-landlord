import PrevPageButton from "@/components/ui/prev-page";

export default function Profile() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Account Overview</h1>
        </div>
        <button className="rounded bg-gold px-8 py-1 font-roboto text-white">
          Edit
        </button>
      </header>

      <div className="px-5 py-7 lg:px-10">
        <form className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <TextInput label="Name" />
          <TextInput label="Email" />
          <TextInput label="Phone Number" />
          <TextInput label="Religion" />
          <TextInput label="Gender" />
          <TextInput label="Date of Birth" />
          <TextInput label="Marital Status" />
          <TextInput label="Occupation" />
          <TextInput label="Property Owner" />
          <TextInput label="Passport/ID No" />
          <TextInput label="TIN" />
          <TextInput label="SIN" />
          <div className="lg:col-span-2">
            <TextInput label="Address" />
          </div>
        </form>
      </div>
    </section>
  );
}

function TextInput({ label }: { label: string }) {
  return (
    <div>
      <label htmlFor="" className="mb-1 block text-sm text-gray-600">
        {label}
      </label>
      <input
        name=""
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
      />
    </div>
  );
}
