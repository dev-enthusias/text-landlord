import Link from "next/link";
import { BackButton } from "@/components/ui/prev-page";
import UpdatePropertyBtn from "@/components/modals/update-property-form";
import {
  Description,
  DetailedFeatures,
  Facilities,
  Location,
  PropertyAgent,
  PropertyNameAndTags,
  PropertyTenants,
  PurchaseProperty,
} from "@/components/pages/properties";
import { routes } from "@/constants/routes";
import { apiGet } from "@/api/config";
import { LandlordPropertyDetailsResponseDataType } from "@/definition";
import Gallery from "@/components/gallery";
import { getPropertyTypeAndCategory } from "@/api/services/property";

async function getPropertyDetails(id: string) {
  const res = await apiGet<LandlordPropertyDetailsResponseDataType>(
    `/private/v1/property/${id}/details-list/`,
  );
  return res.data;
}

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPropertyDetails(params.id);
  const { type, completion } = await getPropertyTypeAndCategory();

  if (!data) return null;

  const gallery = data.gallery.map((item) => item.path);

  const floorPlanPhoto = data.gallery.find((item) =>
    item.title.toLowerCase().includes("floor plan"),
  );

  const editedCompletion = completion.map((d: string, i: number) => ({
    id: i,
    name: d,
  }));
  const editedType = type.map((d: string, i: number) => ({
    id: i,
    name: d,
  }));

  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
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
            name: data.property.name,
            dealType: data.property.deal_type,
            type: data.property.type,
            city: data.property.city ?? "House in Mars",
          }}
        />
        <UpdatePropertyBtn
          type={editedType}
          completion={editedCompletion}
          name={data.property.name}
          id={data.property.id}
          propertyType={data.property.type}
          gallery={gallery}
          floorPlanPhoto={floorPlanPhoto ? [floorPlanPhoto?.path] : []}
        />
      </section>

      <Gallery displayPhoto={data.property.image} gallery={gallery} />

      <section className="grid grid-cols-5 gap-10">
        <div className="col-span-5 grid gap-y-10 lg:col-span-3">
          <Description
            description={
              data.property.description ??
              "You have not added a description for this property."
            }
          />
          <DetailedFeatures
            features={{
              size: data.property.size ?? 0,
              bedroom: data.property.bedroom ?? 0,
              bathroom: data.property.bathroom ?? 0,
              dining_combined:
                data.property.dining_combined ??
                "You have not added dining information.",
              flat_no: data.property.flat_no ?? "(You have not added flat no.)",
            }}
          />
          <Facilities facilities={data.facilities} />
          <Location
            address={data.location.address}
            city={data.property.city}
            country={data.property.country}
            cord={[
              data.location?.city?.latitude
                ? +data.location.city.latitude
                : 9.082,
              data.location?.city?.longitude
                ? +data.location.city.longitude
                : 8.6753,
            ]}
          />
        </div>

        <div className="col-span-5 flex flex-col-reverse gap-y-10 lg:col-span-2 lg:flex-col">
          <PropertyAgent />
          <PropertyTenants />
          <PurchaseProperty
            rent={data.property.rent_amount}
            totalVacant={
              (data.property.total_unit ?? 0) -
              (data.property.total_occupied ?? 0)
            }
          />
        </div>
      </section>
    </main>
  );
}
