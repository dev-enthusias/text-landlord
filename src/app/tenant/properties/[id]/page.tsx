import { BackButton } from "@/components/ui/prev-page";
import {
  Description,
  Features,
  Location,
  PropertyNameAndTags,
  PropertyOwner,
  PurchaseProperty,
  WishlistButton,
} from "@/components/pages/properties";
import Gallery from "@/components/gallery";
import {
  getAdvertisedPropertyDetails,
  getCities,
  getStates,
} from "@/api/services/property";
import { TenantAdvertisedPropertyDetails } from "@/definition";
import { addToCart } from "@/api/services/cart";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = (await getAdvertisedPropertyDetails(
    params.id,
  )) as TenantAdvertisedPropertyDetails;

  const states = await getStates(
    data.advertisement.property.location.country.id,
  );

  console.log(data.advertisement);

  const propertyState = states.find(
    (city: any) => city.id === data.advertisement.property.location.state_id,
  );

  const galleries = data.advertisement.property.galleries.map(
    (gallery) => url + gallery.image.path,
  );

  console.log(data.advertisement.property.location.city_id);

  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
      <div className="mb-8 flex justify-between">
        <BackButton />
        <p className="text-sm">
          Properties / <span className="text-black">Details</span>
        </p>
      </div>

      <section className="mb-4 flex items-center justify-between">
        <PropertyNameAndTags
          data={{
            name: data.property.name,
            dealType: "Rent",
            type:
              data.advertisement.property.type === 0
                ? "Residentail"
                : "Commercial",
            city: propertyState.name,
          }}
        />
        <div className="flex gap-x-2">
          <WishlistButton
            id={data.advertisement.property_id}
            state={data.property.wishlist}
          />

          <form action={addToCart}>
            <input
              type="hidden"
              name="property_id"
              value={data.advertisement.property_id}
            />
            <input
              type="hidden"
              name="price"
              value={data.advertisement.rent_amount}
            />
            <input
              type="hidden"
              name="advertisement_id"
              value={data.advertisement.id}
            />
            <button className="w-full rounded-full bg-gold px-4 py-2 text-sm font-bold text-white">
              Add to Cart
            </button>
          </form>
        </div>
      </section>

      <Gallery
        displayPhoto={url + data.advertisement.property.default_image.path}
        gallery={galleries}
      />

      <section className="grid grid-cols-5 gap-10">
        <div className="col-span-5 grid gap-y-10 lg:col-span-3">
          <Description
            description={
              data.advertisement.property.description
                ? data.advertisement.property.description
                : "There is no description for this property"
            }
          />
          <Features
            features={{
              size: data.advertisement.property.size,
              bedroom: data.advertisement.property.bedroom,
              bathroom: data.advertisement.property.bathroom,
            }}
          />
        </div>

        <div className="col-span-5 flex flex-col gap-y-10 lg:col-span-2">
          <PropertyOwner
            landlord={{
              email: data.advertisement.property.user.email,
              avatar: url + data.advertisement.property.user.avatar,
              name: data.advertisement.property.user.name,
            }}
          />
          <PurchaseProperty
            rent={data.advertisement.rent_amount}
            totalVacant={1}
          />
        </div>

        <section className="col-span-5 mt-10">
          <Location
            address={data.advertisement.property.location.address}
            city={propertyState.name}
            country={data.advertisement.property.location.country.name}
            cord={[40.7128, -74.006]}
          />
        </section>
      </section>
    </main>
  );
}
