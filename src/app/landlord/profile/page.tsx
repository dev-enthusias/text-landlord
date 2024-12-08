import { apiGet } from "@/api/config";
import { userEndpoints } from "@/api/endpoints";
import ProfileForm from "@/components/forms/profile-form";
import PrevPageButton from "@/components/ui/prev-page";
import { UserDetailsResponseDataType } from "@/definition";

async function getProfileDetails() {
  const res = await apiGet<UserDetailsResponseDataType>(
    userEndpoints.GET_USER_DETAILS,
  );
  return res.data;
}

export default async function ProfileDetails() {
  const data = await getProfileDetails();

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg">Loading profile details...</p>
      </div>
    );
  }

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
