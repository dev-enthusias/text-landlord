import { getPropertiesInCart } from "@/api/services/cart";
import RemovePropertyFromCart from "@/components/ui/remove-property-from-cart";
import { CartProperty } from "@/definition";
import Image from "next/image";

export default async function Cart() {
  const data = (await getPropertiesInCart()) as CartProperty;

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
            data.data.map((property) => (
              <CartItem
                key={property.id}
                data={{
                  id: property.id,
                  name: property.property.name,
                  price: property.property.rent_amount,
                  photo: "",
                  address: "Please add address",
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
            <div className="space-y-1">
              <div className="text-14 flex items-center justify-between">
                <div className="flex gap-x-4">
                  <p>x3</p>
                  <p>Acen-Fighting Toner</p>
                </div>
                <p className="text-gray-700">$14.25</p>
              </div>
            </div>
          </section>

          <section className="border-b p-5">
            <div className="flex justify-between">
              <p className="">Amount</p>
              <p className="font-bold text-black">$100,000</p>
            </div>
          </section>

          <section className="p-5">
            <button
              type="submit"
              className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
            >
              Checkout
            </button>
          </section>
        </div>
      )}
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
  };
}) {
  return (
    <article className="relative flex items-start gap-x-2 border-b border-gray-300 p-3 last:border-0">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/images/image-2.jpeg"
          alt="Display photo of the property"
          fill
          style={{ objectFit: "cover" }}
          sizes="80px"
        />
      </div>
      <div className="grow">
        <div className="mb-2">
          <h3 className="text-sm text-gray-600">{data.name}</h3>
          <p className="text-xs tracking-wide">{data.address}</p>
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
        <div className="flex items-center justify-end">
          <RemovePropertyFromCart id={data.id} />
        </div>
      </div>
    </article>
  );
}
