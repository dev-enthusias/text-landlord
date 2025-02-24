import Link from "next/link";
import { BathIcon, BedIcon, RulerIcon } from "lucide-react";
import { routes } from "@/constants/routes";
import PropertyPhoto from "./property-photo";

// TenantPropertyCardTypes<TenantAdvertisedProperties>

export function TenantPropertyCard({
  data,
}: {
  roleid: number;
  data: {
    id: number;
    slug: string;
    name: string;
    price: string;
    image: string;
    address: { address: string };
    bedrooms: number | null;
    bathrooms: number | null;
    size: string;
  };
}) {
  return (
    <Link
      href={routes.TENANT_PROPERTIES + `/${data.slug}`}
      className="block w-full rounded-lg border bg-white p-2 font-lato shadow-gold transition duration-300 ease-out hover:shadow-lg"
    >
      <article className="group flex gap-x-1 sm:flex-col">
        <PropertyPhoto photo={data.image} />

        <div className="grow pt-2">
          <div className="px-2">
            {/* Property value & Status */}
            <div className="flex justify-between">
              <PropertyPrice price={data.price} />

              {/* {type === "rent" && (
                <p className="flex items-center justify-center rounded-full bg-green-600/10 px-4 py-0.5 text-xs font-semibold leading-none text-green-500">
                  Paid
                </p>
              )} */}
            </div>

            <PropertyNameAndLocation
              data={{ name: data.name, location: data?.address?.address }}
            />

            <PropertyFeatures
              bedrooms={data.bedrooms ?? 0}
              bathrooms={data.bathrooms ?? 0}
              size={data.size}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

export function LandlordPropertyCard({
  data,
}: {
  data: {
    id: number;
    name: string;
    price: string;
    image: string;
    status: "pending" | "approved";
    address: { address: string };
    bedrooms: number | null;
    bathrooms: number | null;
    size: string;
  };
}) {
  return (
    <Link
      href={routes.LANDLORD_PROPERTIES + `/${data.id}`}
      className="block w-full rounded-lg border bg-white p-2 font-lato shadow-gold transition duration-300 ease-out hover:shadow-lg"
    >
      <article className="group flex gap-x-1 sm:flex-col">
        <PropertyPhoto photo={data.image} status={data.status} />

        <div className="grow pt-2">
          <div className="px-2">
            <div className="flex justify-between">
              <PropertyPrice price={data.price} />
            </div>

            <PropertyNameAndLocation
              data={{ name: data.name, location: data?.address?.address }}
            />

            <PropertyFeatures
              bedrooms={data.bedrooms ?? 0}
              bathrooms={data.bathrooms ?? 0}
              size={data.size}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

function PropertyPrice({ price }: { price: string }) {
  return (
    <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
      {price}
      <span className="text-xs font-medium text-gray-500 opacity-80">
        / year
      </span>
    </p>
  );
}

function PropertyNameAndLocation({
  data,
}: {
  data: { name: string; location: string };
}) {
  return (
    <div>
      <h3 className="font-bold text-gray-600">{data.name}</h3>
      <p className="text-xs capitalize tracking-wide">
        {data.location || "Add the address for this property"}
      </p>
    </div>
  );
}

function PropertyFeatures(data: {
  bedrooms: number;
  bathrooms: number;
  size: string;
}) {
  return (
    <ul className="mt-2 flex items-center justify-between text-xs">
      <li className="flex w-1/3 items-center justify-start gap-x-1">
        <BedIcon size={14} />
        <span>{data.bedrooms || 0} bd</span>
      </li>
      <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300">
        <BathIcon size={14} />
        <span>{data.bathrooms || 0} bt</span>
      </li>
      <li className="flex w-1/3 items-center justify-end gap-x-1">
        <RulerIcon size={14} />
        <span>{data.size || 0} ft</span>
      </li>
    </ul>
  );
}
