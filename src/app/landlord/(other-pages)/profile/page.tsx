import { getProfileDetails } from "@/api/services/profile";
import ProfileForm from "@/components/forms/profile-form";
import PrevPageButton from "@/components/ui/prev-page";
import { UserDetailsResponseDataType } from "@/definition";

export default async function ProfileDetails() {
  const data = (await getProfileDetails()) as UserDetailsResponseDataType;

  console.log(data);

  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Account Overview</h1>
        </div>
      </header>

      <div className="px-5 py-7 lg:px-10">
        <ProfileForm data={data} />
      </div>
    </section>
  );
}
