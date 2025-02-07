import { BackButton } from "@/components/ui/prev-page";
import {
  Description,
  DetailedFeatures,
  Facilities,
  Location,
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
import {
  TenantAdvertisedProperties,
  TenantAdvertisedPropertyDetails,
} from "@/definition";
import AddToCartButton from "@/components/forms/add-to-cart-form";
import BookAppointment from "@/components/forms/book-appointment-btn";
import { getProfileDetails } from "@/api/services/profile";

export default async function PropertyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const properties = await getAllAdvertisedProperties({
    types: ["Commercial", "Residential", "Industrial", "Land"],
  });
  const property = properties.find(
    (property: TenantAdvertisedProperties) => property.slug === params.slug,
  );
  const profile = await getProfileDetails();

  const data = (await getAdvertisedPropertyDetails(
    property.advertise_id,
  )) as TenantAdvertisedPropertyDetails;

  const galleries = data?.galleries?.map((gallery) => gallery.image);

  console.log(profile);

  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
      <section className="mb-8 flex items-center justify-between rounded-lg bg-white px-4 py-3">
        <BackButton />
        <p className="text-sm lg:text-base">
          Properties / <span className="text-black">Details</span>
        </p>
      </section>

      <section className="mb-4 flex items-center justify-between rounded-lg bg-gold/10 px-4 py-3">
        <PropertyNameAndTags
          data={{
            name: data.property.name,
            dealType: "Rent",
            type: data.property.type,
            category: data.property.category,
          }}
        />

        <div className="flex items-center gap-x-2">
          <WishlistButton
            id={data.property.id}
            state={data.property.wishlist}
          />

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
        </div>
      </section>

      <Gallery displayPhoto={data.property.image} gallery={galleries} />

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
              size: data.property.size || 0,
              bedroom: data.property.bedroom || 0,
              bathroom: data.property.bathroom || 0,
              dining_combined: data.property.dining_combined,
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
            }}
          />
          <PurchaseProperty
            propertyId={data.property.id}
            advertisementId={data.advertisement.id}
            rent={data.advertisement.rent_amount}
            type={data.property.type}
            category={data.property.category}
          />
        </div>

        <section className="col-span-5 mt-5 rounded-lg bg-white p-4">
          <Location
            address={data.address.address}
            country={data.address.country}
            cord={[40.7128, -74.006]}
          />
        </section>
      </section>
    </main>
  );
}
