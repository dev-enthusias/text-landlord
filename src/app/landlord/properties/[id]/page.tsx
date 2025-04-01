import Link from "next/link";
import UpdatePropertyBtn from "@/components/modals/update-property-form";
import {
  Description,
  DetailedFeatures,
  Facilities,
  PropertyNameAndTags,
  PurchaseProperty,
} from "@/components/pages/properties";
import { routes } from "@/constants/routes";
import {
  LandlordPropertyDetailsResponseDataType,
  PropertyFieldsResponseDT,
} from "@/definition";
import Gallery from "@/components/gallery";
import { getPropertyDetails, getPropertyFields } from "@/api/services/property";
import AdvertisePropertyBtn from "@/components/modals/advertise-property";
import { FiChevronLeft } from "react-icons/fi";
import { getRole } from "@/lib/actions";

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = (await getPropertyDetails(
    params.id,
  )) as LandlordPropertyDetailsResponseDataType;

  const gallery = data.gallery.map((item) => item.path);

  const floorPlanPhoto = data.gallery.find((item) =>
    item.title.toLowerCase().includes("floor plan"),
  );

  const propertyFields =
    (await getPropertyFields()) as PropertyFieldsResponseDT;

  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
      <section className="mb-4 flex items-center justify-between rounded-lg bg-white px-4 py-3 lg:mb-8">
        <Link
          href={routes.LANDLORD_PROPERTIES}
          className="group flex items-center gap-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-black"
        >
          <FiChevronLeft className="duraton-300 transition-transform ease-out group-hover:-translate-x-1" />
          <span className="hidden lg:inline"> Back</span>
        </Link>
        <p className="text-sm lg:text-base">
          Properties / <span className="text-black">Details</span>
        </p>
      </section>

      <section className="mb-4 flex items-center justify-between rounded-lg bg-[#eeebde] px-4 py-3">
        <PropertyNameAndTags
          name={data.property.name}
          address={`${data.property.address}, ${data.property.city}, ${data.property.country}, ${data.property.zip_code}`}
        />

        <div className="flex gap-x-2">
          <UpdatePropertyBtn
            type={propertyFields.data.types}
            name={data.property.name}
            id={data.property.id}
            propertyType={data.property.type}
            gallery={gallery}
            rent={data.property.rent_amount}
            floorPlanPhoto={floorPlanPhoto ? [floorPlanPhoto?.path] : []}
          />

          <AdvertisePropertyBtn id={data.property.id} />
        </div>
      </section>

      <Gallery displayPhoto={data.property.image} gallery={gallery} />

      <section className="grid grid-cols-5 gap-5">
        <div className="col-span-5 grid gap-y-10 lg:col-span-3">
          <Description
            description={
              data.property.description ??
              "You have not added a description for this property."
            }
          />
          <DetailedFeatures
            features={{
              size: data.property.size,
              bedroom: data.property.bedroom ?? 0,
              bathroom: data.property.bathroom ?? 0,
              dining_combined:
                data.property.dining_combined ??
                "You have not added dining information.",
              flat_no: data.property.flat_no ?? "(You have not added flat no.)",
            }}
          />
          <Facilities facilities={data.facilities} />
        </div>

        <div className="col-span-5 flex flex-col-reverse gap-y-10 lg:col-span-2 lg:flex-col">
          {/* <PropertyAgent /> */}
          {/* <PropertyTenants /> */}
          <PurchaseProperty
            rent={data.property.rent_amount}
            type={data.property.type}
            category={data.property.category}
            roleId={(await getRole()) as number}
          />
        </div>
      </section>
    </main>
  );
}
