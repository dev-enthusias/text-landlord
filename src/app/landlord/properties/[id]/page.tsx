import Link from "next/link";
import { BackButton } from "@/components/ui/prev-page";
import EditPropertyBtn from "@/components/modals/edit-property";
import {
  Description,
  Features,
  Gallery,
  Location,
  PropertyAgent,
  PropertyNameAndTags,
  PropertyTenants,
  PurchaseProperty,
} from "@/components/pages/properties";
import { LandlordPropertyDetailsResponseDataType } from "@/definition";
import { routes } from "@/constants/routes";
import { getDataWithToken } from "@/lib/axios-instance";

async function getLandlordPropertyDetails(
  id: string,
): Promise<
  LandlordPropertyDetailsResponseDataType | undefined | { error: string }
> {
  try {
    const res = await getDataWithToken(
      `/private/v1/property/${id}/details-list/`,
    );
    if (res.status === 200 && res.data.result) return res.data.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getLandlordPropertyDetails(id);

  if (typeof data === "object" && "error" in data) return data.error;

  return (
    <main className="px-20 py-7 pb-20">
      <div className="mb-8 flex justify-between">
        <BackButton />
        <p className="text-sm">
          <Link
            href={routes.LANDLORD_PROPERTIES}
            className="transition-all duration-300 hover:text-black hover:underline"
          >
            Properties
          </Link>{" "}
          /{" "}
          <span className="cursor-pointer text-black hover:underline">
            Details
          </span>
        </p>
      </div>

      <section className="mb-4 flex items-center justify-between">
        <PropertyNameAndTags
          data={{
            name: data?.property.name || "",
            dealType: data?.property.deal_type || "",
            type: data?.property.type || "",
            city: data?.property.city || "Nil",
          }}
        />
        <EditPropertyBtn />
      </section>

      <Gallery />

      <section className="grid grid-cols-5 gap-x-10">
        <div className="col-span-3 grid gap-y-10">
          <Description />
          <Features />
          <Location />
        </div>

        <div className="col-span-2 flex flex-col gap-y-10">
          <PropertyAgent />
          <PropertyTenants />
          <PurchaseProperty />
        </div>
      </section>
    </main>
  );
}
