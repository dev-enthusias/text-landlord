import {
  Description,
  DetailedFeatures,
  Facilities,
  PropertyNameAndTags,
  PropertyOwner,
  PurchaseProperty,
  WishlistButton,
} from "@/components/pages/properties";
import Gallery from "@/components/gallery";
import {
  getAdvertisedPropertyDetails,
  getAllAdvertisedProperties,
} from "@/api/services/property";
import AddToCartButton from "@/components/forms/add-to-cart-form";
import BookAppointment from "@/components/forms/book-appointment-btn";
import { getProfileDetails } from "@/api/services/profile";
import {
  AdvertisedPropertiesRDT,
  AdvertisedPropertyDetailsRDT,
} from "@/definitions/tenant";
import { getRole, getUserId } from "@/lib/actions";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

export default async function PropertyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const profile = await getProfileDetails();
  const userId = (await getUserId()) as string;
  const properties = (await getAllAdvertisedProperties({
    types: ["Commercial", "Residential", "Industrial", "Land"],
  })) as AdvertisedPropertiesRDT;
  const property = properties.data.find(
    (property) => property.slug === params.slug,
  );

  if (!property) return null;

  const { data } = (await getAdvertisedPropertyDetails(
    property.advertise_id,
  )) as AdvertisedPropertyDetailsRDT;

  const galleries = Object.values(data.galleries).map((item) => item.image);
  const floorPlans = Object.values(data.floorPlans).map((item) => item.image);

  return (
    <main className="relative px-3 py-4 pb-20 lg:px-20 lg:pb-20 lg:pt-7">
      <section className="mb-4 flex items-center justify-between rounded-lg bg-white px-4 py-3 lg:mb-8">
        <Link
          href="/tenant/properties"
          className="group flex items-center gap-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-black"
        >
          <FiChevronLeft className="duraton-300 transition-transform ease-out group-hover:-translate-x-1" />
          <span className="hidden lg:inline"> Back</span>
        </Link>
        <p className="text-sm lg:text-base">
          Properties / <span className="text-black">Details</span>
        </p>
      </section>

      <section className="z-50 mb-4 flex items-center justify-between rounded-lg bg-[#eeebde] px-4 py-3 lg:sticky lg:top-20">
        <PropertyNameAndTags
          address={data.address.address + ", " + data.address.country}
          name={data.property.name}
        />

        <div className="flex gap-2 lg:items-center">
          <WishlistButton
            id={data.property.id}
            state={data.property.wishlist}
          />

          <div className="hidden lg:block">
            <BookAppointment
              data={{
                name: profile.profile_info.name,
                phone: profile.profile_info.phone,
                email: profile.profile_info.email,
                property_address: data.address.address,
                property_id: data.property.id,
                property_owner_id: data.user.id,
              }}
            />
          </div>

          <div className="hidden lg:block">
            <AddToCartButton
              values={{
                propertyId: data.property.id,
                advertisementId: data.advertisement.id,
                amount: data.advertisement.rent_amount,
              }}
            />
          </div>
        </div>
      </section>

      <Gallery
        displayPhoto={data.property.image}
        gallery={[...galleries, ...floorPlans]}
      />

      <section className="grid grid-cols-5 items-start gap-5">
        <div className="col-span-5 grid gap-y-5 lg:col-span-3">
          {data.property.completion.toLowerCase() !== "completed" && (
            <p className="text-black">
              <strong>Note:</strong> This property might still be under
              construction
            </p>
          )}

          <Description description={data.property.description} />

          <DetailedFeatures
            features={{
              size: data.property.size || "0",
              bedroom: data.property.bedroom || 0,
              bathroom: data.property.bathroom || 0,
              flat_no: data.property.flat_no,
            }}
          />

          {data.facilities.length > 0 && (
            <Facilities facilities={data.facilities} />
          )}
        </div>

        <div className="col-span-5 flex flex-col gap-y-5 lg:col-span-2">
          <PropertyOwner
            landlord={{
              email: data.property.user_email,
              avatar: data.user.photo,
              name: data.user.name,
              phone: data.property.user_phone,
              id: data.advertisement.property_creator_id,
              userId: +userId,
            }}
          />
          <PurchaseProperty
            propertyId={data.property.id}
            advertisementId={data.advertisement.id}
            rent={data.advertisement.rent_amount}
            type={data.property.type}
            category={data.property.category}
            roleId={(await getRole()) as number}
          />
        </div>
      </section>

      <section
        className="fixed bottom-0 left-0 grid w-full grid-cols-2 justify-between gap-x-2 bg-gray-100 px-1 py-3 lg:hidden"
        style={{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.07)" }}
      >
        <BookAppointment
          data={{
            name: profile.profile_info.name,
            phone: profile.profile_info.phone,
            email: profile.profile_info.email,
            property_address: data.address.address,
            property_id: data.property.id,
            property_owner_id: data.user.id,
          }}
        />

        <AddToCartButton
          values={{
            propertyId: data.property.id,
            advertisementId: data.advertisement.id,
            amount: data.advertisement.rent_amount,
          }}
        />
      </section>
    </main>
  );
}
