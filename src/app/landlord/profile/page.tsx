import PrevPageButton from "@/components/ui/prev-page";

// async function getProfileDetails(): Promise<ProfileDetailsRDT | undefined> {
//   const token = await getToken();

//   try {
//     const response = await fetch(`${BASE_URL}/private/v1/user/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // Handle non-200 responses
//     if (!response.ok) {
//       const errorText = await response.text(); // Get full response body
//       console.error(`Error ${response.status}: ${response.statusText}`);
//       console.log("Error response body:", errorText);
//       return;
//     }

//     // Parse JSON for a valid response
//     const result = await response.json();
//     console.log(result);
//     return result.data.profile_info;
//   } catch (error: unknown) {
//     console.error("Fetch error:", error);
//   }
// }

export default async function ProfileDetails() {
  // const data = await getProfileDetails();

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
        <form>
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
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
          </div>
        </form>
      </div>
    </section>
  );
}

function TextInput({ label }: { label: string }) {
  return (
    <div className="w-full">
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
