import Link from "next/link";
import Image from "next/image";
import { routes } from "@/constants/routes";
import { BsBuildingsFill, BsChat } from "react-icons/bs";
import { SiStatuspal } from "react-icons/si";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { BathIcon, BedIcon, Handshake, RulerIcon } from "lucide-react";
import { getRole } from "@/lib/actions";
import React from "react";
import { MdDining } from "react-icons/md";
import { formatCurrency } from "@/utils/formatCurrency";
import dynamic from "next/dynamic";

export function PropertyNameAndTags({
  data,
}: {
  data: { name: string; dealType: string; type: string; city: string };
}) {
  return (
    <div>
      <h1 className="font-roboto text-xl font-semibold text-black sm:text-2xl">
        {data.name}
      </h1>
      <p className="flex gap-x-2 text-sm tracking-wide">
        <span>{data.dealType}</span> | <span>{data.type}</span> |{" "}
        <span>{data.city}</span>
      </p>
    </div>
  );
}

export function WishlistButton() {
  return (
    <button className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 transition-colors duration-300 ease-out hover:bg-gold/20">
      {false ? (
        <PiHeart className="text-xl group-hover:text-black" />
      ) : (
        <PiHeartFill className="text-xl text-gold" />
      )}
    </button>
  );
}

export function Description({ description }: { description: string }) {
  return (
    <section>
      <h2 className="mb-1 font-roboto text-xl font-medium text-black">
        Description
      </h2>
      <p>{description}</p>
    </section>
  );
}

export function Features({
  features,
}: {
  features: {
    size: null | string;
    bedroom: null | string;
    bathroom: null | string;
  };
}) {
  return (
    <section>
      <h2 className="mb-1 font-roboto text-xl font-medium text-black">
        Features
      </h2>
      <ul className="flex flex-col gap-y-5">
        <li className="flex gap-x-2">
          <BedIcon size={20} className="text-gray-600" />
          <span>{features.bedroom} bedrooms</span>
        </li>
        <li className="flex gap-x-2">
          <BathIcon size={20} className="text-gray-600" />
          <span>{features.bathroom} bathrooms</span>
        </li>
        <li className="flex gap-x-2">
          <RulerIcon size={20} className="text-gray-600" />
          <span>{features.size} square feet</span>
        </li>
      </ul>
    </section>
  );
}

export function DetailedFeatures({
  features,
}: {
  features: {
    size: null | number;
    dining_combined: string | null;
    bedroom: null | number;
    bathroom: null | number;
    flat_no: null | string;
  };
}) {
  return (
    <section>
      <h2 className="mb-1 font-roboto text-xl font-medium text-black">
        Features
      </h2>
      <ul className="flex flex-col gap-y-5">
        <li className="flex gap-x-2">
          <BedIcon size={20} className="text-gray-600" />
          <span>{features.bedroom} bedrooms</span>
        </li>
        <li className="flex gap-x-2">
          <BathIcon size={20} className="text-gray-600" />
          <span>{features.bathroom} bathrooms</span>
        </li>
        <li className="flex gap-x-2">
          <RulerIcon size={20} className="text-gray-600" />
          <span>{features.size} square feet</span>
        </li>
        <li className="flex gap-x-2">
          <MdDining size={20} className="text-gray-600" />
          <span>{features.dining_combined}</span>
        </li>
        <li className="flex gap-x-2">
          <BsBuildingsFill size={20} className="text-gray-600" />
          <span>Flat {features.flat_no}</span>
        </li>
      </ul>
    </section>
  );
}

export function Facilities({
  facilities,
}: {
  facilities: { name: string; content: string; image: string; id: number }[];
}) {
  return (
    <section>
      <h2 className="mb-1 font-roboto text-xl font-medium text-black">
        Facilities
      </h2>
      <ul className="flex flex-wrap justify-between gap-5">
        {facilities.length <= 0 ? (
          <p>This property has no facilities or you may have not added any.</p>
        ) : (
          facilities.map((facility) => (
            <li key={facility.id} className="flex items-center gap-x-2">
              <div className="relative h-5 w-5">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-black">{facility.name}</h3>
                <p className="text-gray-600">{facility.content}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export function PropertyOwner() {
  return (
    <section>
      <h2 className="mb-2 font-roboto text-xl font-medium text-black">
        Property Owner
      </h2>
      <article className="flex items-center justify-between">
        <div className="flex items-start gap-x-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/profile-img.jpeg"
              alt="property owner photo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm text-black">Sograh Emilafia</h3>
            <p className="text-xs">sograyemilafi@ogalandlords.com</p>
          </div>
        </div>
        <Link
          href={routes.CHAT + "/0"}
          className="flex items-center gap-x-2 rounded-full bg-white px-4 py-1.5 font-roboto text-sm font-semibold text-gold shadow-lg transition-all duration-300 ease-out hover:shadow"
        >
          <BsChat /> Chat
        </Link>
      </article>
    </section>
  );
}

// You should later remove this function
export function PropertyAgent() {
  return (
    <section>
      <h2 className="mb-2 font-roboto text-xl font-medium text-black">
        Assigned Agent
      </h2>
      <article className="flex items-center justify-between">
        <div className="flex items-start gap-x-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/profile-img.jpeg"
              alt="property owner photo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm text-black">Sograh Emilafia</h3>
            <p className="text-xs">sograyemilafi@ogalandlords.com</p>
          </div>
        </div>
        <Link
          href={routes.CHAT + "/0"}
          className="flex items-center gap-x-2 rounded-full bg-white px-4 py-1.5 font-roboto text-sm font-semibold text-gold shadow-lg transition-all duration-300 ease-out hover:shadow"
        >
          <BsChat /> Chat
        </Link>
      </article>
    </section>
  );
}

export async function PurchaseProperty({
  rent,
  totalVacant,
}: {
  rent: number;
  totalVacant: number;
}) {
  const roleid = await getRole();

  return (
    <section className="space-y-5 rounded-xl bg-white p-5">
      <p className="text-xl font-bold text-accent">
        {formatCurrency(rent ?? 0)}
        <span className="text-base font-normal text-gray-500">/ year</span>
      </p>

      <div className="flex flex-wrap justify-between gap-5 rounded-lg bg-background px-5 py-4 text-lg">
        <div className="flex items-start gap-x-3">
          <Handshake size={20} className="mt-1 text-gray-600" />
          <div>
            <p>Down Payment</p>
            <p className="font-semibold text-gray-600">₦350,000</p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <SiStatuspal size={20} className="mt-1 text-gray-600" />
          <div>
            <p>Availability</p>
            <p className="font-semibold text-gray-600">
              {totalVacant} vacant rooms
            </p>
          </div>
        </div>
      </div>

      {roleid === 5 && (
        <button className="w-full rounded-full bg-gold py-3 text-lg font-bold text-white">
          Add to Cart
        </button>
      )}
    </section>
  );
}

export function Location({
  address,
  city,
  country,
  cord,
}: {
  address: string | null;
  city: string | null;
  country: string | null;
  cord: [number, number];
}) {
  // Move dynamic import outside of the component
  const Map = dynamic(() => import("@/components/map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  return (
    <section>
      <h2 className="mb-1 font-roboto text-xl font-medium text-black">
        Location
      </h2>
      <p className="mb-4 capitalize">
        {address ?? "No address added"}, {city ?? "No city added"},{" "}
        {country ?? "No country added"}
      </p>

      <div className="relative h-48">
        <Map address={address ?? ""} posix={cord} />
      </div>
    </section>
  );
}

export function PropertyTenants() {
  return (
    <section>
      <h2 className="mb-2 font-roboto text-xl font-medium text-black">
        Tenants (3)
      </h2>

      <div className="space-y-4">
        <PropertyTenant rentStatus="upcoming" />
        <PropertyTenant rentStatus="current" />
        <PropertyTenant rentStatus="overdue" />
      </div>
    </section>
  );
}

function PropertyTenant({
  rentStatus,
}: {
  rentStatus: "upcoming" | "overdue" | "current";
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt="property owner photo"
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm text-black">Sograh Emilafia</h3>
          <p className="text-xs">sograyemilafi@ogalandlords.com</p>
        </div>
      </div>
      <p
        className={`text-sm font-bold ${
          rentStatus === "upcoming"
            ? "text-green-600"
            : rentStatus === "current"
              ? "text-accent"
              : "text-orange-600"
        }`}
      >
        {rentStatus}
      </p>
      <Link
        href={routes.CHAT + "/0"}
        className="flex items-center gap-x-2 rounded-full bg-white px-1.5 py-1.5 font-roboto text-sm font-semibold text-gold shadow-lg transition-all duration-300 ease-out hover:shadow sm:px-4"
      >
        <BsChat /> <span className="hidden sm:inline-block">Chat</span>
      </Link>
    </div>
  );
}
