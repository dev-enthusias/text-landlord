"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartSolid, HeartStroke } from "../svg";
import { BathIcon, BedIcon, RulerIcon, Trash2 } from "lucide-react";
import { routes } from "@/constants/routes";
import { TenantPropertyCardTypes } from "@/definition";

function PropertyPhoto({ photo }: { photo: string }) {
  return (
    <div className="relative w-36 overflow-hidden rounded-lg shadow sm:h-36 sm:w-auto sm:min-w-[240px] lg:min-w-fit">
      <Image
        src={photo}
        alt="property display photo"
        fill
        sizes="384px"
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />
    </div>
  );
}

function PropertyPrice() {
  return (
    <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
      ₦5,000,000{" "}
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
      <h3 className="text-gray-600">Dominaco Plaxa</h3>
      <p className="text-xs tracking-wide">Palaxisto Emeriando Plaza Road</p>
    </div>
  );
}

function PropertyFeatures() {
  return (
    <ul className="mt-3 flex items-center justify-between text-xs">
      <li className="flex w-1/3 items-center justify-start gap-x-1">
        <BedIcon size={14} />
        <span>6 bd</span>
      </li>
      <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300">
        <BathIcon size={14} />
        <span>6 bt</span>
      </li>
      <li className="flex w-1/3 items-center justify-end gap-x-1">
        <RulerIcon size={14} />
        <span>2.62ft</span>
      </li>
    </ul>
  );
}

export function PropertyCard({ type, roleid, data }: TenantPropertyCardTypes) {
  const [favProperty, setFavProperty] = useState(false);

  const handleFavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setFavProperty(!favProperty);
  };

  const path = (() => {
    switch (true) {
      case roleid === 4:
        return routes.LANDLORD_PROPERTIES + `/${data.id}`;
      case roleid === 5:
        return type === "order"
          ? routes.TENANT_ORDERS + "/0"
          : routes.TENANT_PROPERTIES + "/0";
      case roleid === 4 && type === "order":
        return routes.LANDLORD_ORDERS + "/0";
      default:
        return type === "order"
          ? routes.AGENT_DASHBOARD_SETTINGS + "?path=orderdetails"
          : routes.AGENT_PROPERTIES + "/0";
    }
  })();

  return (
    <Link
      href={path}
      className="font-lato block w-full rounded-lg border bg-white p-2 shadow-gold transition duration-300 ease-out hover:shadow-lg"
    >
      <article className="group flex gap-x-1 sm:flex-col">
        <PropertyPhoto photo={data.image} />

        {/* Rent status */}
        <div className="grow pt-2">
          <div className="px-2">
            {/* Property value & Favourite Btn || Delete Btn */}
            <div className="mb-2 flex justify-between">
              <PropertyPrice />

              {type === "wishlist" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Trash2 className="h-4 w-4 transition-colors duration-300 hover:text-red-600" />
                </button>
              ) : type === "rent" ? (
                <p className="flex items-center justify-center rounded-full bg-green-600/10 px-4 py-0.5 text-xs font-semibold leading-none text-green-500">
                  Paid
                </p>
              ) : type === "order" ? (
                ""
              ) : roleid === 5 ? (
                <button onClick={(e) => handleFavClick(e)}>
                  {!favProperty ? (
                    <span className="group-hover:animate-pulse">
                      <HeartStroke />
                    </span>
                  ) : (
                    <HeartSolid />
                  )}
                </button>
              ) : (
                ""
              )}
            </div>

            {/* Property name and location */}
            <PropertyNameAndLocation data={{ name: data.name, location: "" }} />

            {type !== "order" ? (
              <PropertyFeatures />
            ) : (
              // Property order date and time
              <p className="mt-1 text-sm">10/10/2024 - 01:30PM</p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
