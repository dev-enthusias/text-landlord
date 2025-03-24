import { getPropertiesInCart } from "@/api/services/cart";
import { getPropertyDetails } from "@/api/services/property";
import CheckoutButton from "@/components/forms/checkout-btn";
import Menu from "@/components/layout/footer-menu";
import RemovePropertyFromCart from "@/components/ui/remove-property-from-cart";
import { CartItemsRDT } from "@/definitions/tenant";
import Image from "next/image";

export default async function Cart() {
  const data = (await getPropertiesInCart()) as CartItemsRDT;
  const cartItemPropertyDetails = await Promise.all(
    data.data.map((item) => getPropertyDetails(item.property.id)),
  );

  const numberOfProperties = data.data.length;

  return (
    <main className="grid grid-cols-5 items-start gap-5 py-7 pb-20 lg:px-40">
      <section className="col-span-5 space-y-4 bg-white px-5 lg:col-span-3 lg:rounded-lg lg:p-3 lg:shadow-lg">
        <div className="-mx-5 border-b px-5 py-5 text-xl font-bold text-black">
          Cart ({numberOfProperties})
        </div>
        <div>
          {numberOfProperties <= 0 ? (
            <p className="pb-5">You have not added any property to cart!</p>
          ) : (
            data.data.map((property, i) => (
              <CartItem
                key={property.id}
                data={{
                  id: property.id,
                  name: property.property.name,
                  price: property.property.rent_amount,
                  photo: cartItemPropertyDetails[i].property.image,
                  address:
                    cartItemPropertyDetails[i].property.address +
                    ", " +
                    cartItemPropertyDetails[i].property.city +
                    ", " +
                    cartItemPropertyDetails[i].property.country,
                  cautionPercentage: property.property.caution_fee,
                }}
              />
            ))
          )}
        </div>
      </section>

      {numberOfProperties > 0 && (
        <div className="col-span-5 rounded-lg bg-white lg:col-span-2 lg:block lg:border">
          <section className="border-b p-5">
            <h3 className="mb-6 font-medium text-black">Order Summary</h3>
            <div className="space-y-2">
              {data.data.map((property: any) => (
                <div
                  key={property.id}
                  className="text-14 flex items-start justify-between"
                >
                  <p className="flex">{property.property.name}</p>

                  <div className="flex flex-col items-end gap-y-0.5">
                    <p className="text-gray-700">
                      {Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      }).format(property.property.rent_amount)}
                    </p>
                    <p className="text-gray-700">
                      {Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      }).format(
                        (property.property.rent_amount *
                          Number(property.property.caution_fee)) /
                          100,
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b p-5">
            <div className="flex justify-between">
              <p className="">Total Amount</p>
              <p className="font-bold text-black">
                {Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(
                  data.data.reduce(
                    (total, property) =>
                      total +
                      property.property.rent_amount +
                      (property.property.rent_amount *
                        Number(property.property.caution_fee)) /
                        100,
                    0,
                  ),
                )}
              </p>
            </div>
          </section>

          <section className="p-5">
            <CheckoutButton cartItems={data.data} />
          </section>
        </div>
      )}

      <Menu />
    </main>
  );
}

function CartItem({
  data,
}: {
  data: {
    photo: string;
    name: string;
    address: string;
    price: number;
    id: number;
    cautionPercentage: string;
  };
}) {
  return (
    <article className="relative flex items-start gap-x-2 border-b border-gray-300 p-3 last:border-0">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={data.photo}
          alt="Display photo of the property"
          fill
          style={{ objectFit: "cover" }}
          sizes="80px"
        />
      </div>
      <div className="grow">
        <div className="mb-1">
          <h3 className="text-sm text-gray-600">{data.name}</h3>
          <p className="text-xs capitalize tracking-wide">{data.address}</p>
        </div>
        <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
          {Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(data.price)}{" "}
          <span className="text-xs font-medium text-gray-500 opacity-80">
            / year
          </span>
        </p>
        <p className="text-xs lg:text-sm">
          Caution fee: {Math.trunc(Number(data.cautionPercentage))}%
          <span className="mx-2">{" => "}</span>
          <span className="font-semibold">
            {Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format((data.price * Number(data.cautionPercentage)) / 100)}
          </span>
        </p>
        <div className="flex items-center justify-end">
          <RemovePropertyFromCart id={data.id} />
        </div>
      </div>
    </article>
  );
}
