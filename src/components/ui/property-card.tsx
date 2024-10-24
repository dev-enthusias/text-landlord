"use client";

import { routes } from "@/constants/routes";
import { getRole } from "@/utils/role";
import {
  BathIcon,
  BedIcon,
  MapPin,
  RulerIcon,
  Trash2,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeartSolid, HeartStroke } from "../svg";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PropertyCard({
  type,
  status,
  queryParam = "",
}: {
  type?: "order";
  status?: string;
  queryParam?: string;
}) {
  const USERROLE = getRole();

  return (
    <Link
      href={
        type !== "order"
          ? routes.TENANT_DASHBOARD_PROPERTIES_DETAIL +
            `?property-status=${queryParam}`
          : routes.DASHBOARDSETTINGS + "?path=orderdetails"
      }
      className="z-40 block"
    >
      <article className="">
        <div className="relative h-36 overflow-hidden rounded-lg">
          <Image
            src="/images/duplex.webp"
            alt="property display photo"
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>
        <div className="border-b border-b-gray-300 py-2">
          {status === "upcoming" ? (
            <p className="text-xxs font-semibold text-accent">
              Upcoming - Due 21st December, 2024
            </p>
          ) : status === "overdue" ? (
            <p className="text-xxs font-semibold text-red-600">
              Overdue - Expired 15th September, 2024
            </p>
          ) : (
            ""
          )}

          <p className="flex items-center gap-x-1 text-lg font-bold text-primary-dark">
            ₦5,000,000{" "}
            <span className="text-[14px] font-medium text-foreground opacity-50">
              /Year
            </span>
          </p>

          <div className="mt-1">
            <h3 className="text-lg font-semibold">Emperica in Dazil, Villa</h3>
            <p className="text-medium flex items-start gap-x-0.5 text-sm">
              <MapPin size={10} className="mt-1" /> Palaxisto Emeriando Plaza
              Road
            </p>
          </div>

          {USERROLE === "tenant" && type !== "order" ? (
            <ul className="mt-3 flex items-center justify-between">
              <li className="flex w-1/3 items-center justify-start gap-x-1 text-sm font-semibold">
                <BedIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">6 bd</span>
              </li>
              <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300 text-sm font-semibold">
                <BathIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">6 bt</span>
              </li>
              <li className="flex w-1/3 items-center justify-end gap-x-1 text-sm font-semibold">
                <RulerIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">2.62ft</span>
              </li>
            </ul>
          ) : (
            <p className="mt-1 text-sm">10/10/2024 - 01:30PM</p>
          )}

          {USERROLE === "landlord" && (
            <div className="mt-3 flex justify-between text-[14px] font-semibold">
              <p className="flex items-center gap-x-1">
                <UsersRound size={18} className="text-primary-dark" />{" "}
                <span className="opacity-60"> 3 tenants</span>
              </p>
              <p className="flex items-center gap-x-1">
                <UsersRound size={18} className="text-primary-dark" />
                <span className="opacity-60">12 vacant</span>
              </p>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

// Move the link to the page component at least when you start the endpoint integration.
export function TenantPropertyCard({
  type,
  status,
  wishlist = false,
  queryParam,
}: {
  type?: "order";
  status?: string;
  wishlist?: boolean;
  queryParam?: string;
}) {
  const pathname = usePathname();
  const [favProperty, setFavProperty] = useState(false);

  const handleFavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setFavProperty(!favProperty);
  };

  return (
    <Link
      href={
        type !== "order"
          ? routes.TENANT_DASHBOARD_PROPERTIES +
            "/0" +
            `?property-status=${queryParam}`
          : routes.TENANT_DASHBOARD_SETTINGS + "?path=orderdetails"
      }
      className="z-40 block"
    >
      <article>
        {/* Property photo */}
        <div className="relative h-36 min-w-[240px] overflow-hidden rounded-lg lg:min-w-fit">
          <Image
            src="/images/duplex.webp"
            alt="property display photo"
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>

        {/* Rent status */}
        <div className="border-b border-b-gray-300 py-2">
          {status === "upcoming" ? (
            <p className="text-xxs font-semibold text-accent">
              Upcoming - Due 21st December, 2024
            </p>
          ) : status === "overdue" ? (
            <p className="text-xxs font-semibold text-red-600">
              Overdue - Expired 15th September, 2024
            </p>
          ) : (
            ""
          )}

          {/* Property value & Favourite Btn */}
          <div className="flex justify-between pr-2">
            <p className="flex items-center gap-x-1 text-lg font-bold text-primary-dark">
              ₦5,000,000{" "}
              <span className="text-sm font-medium text-foreground opacity-50">
                /Year
              </span>
            </p>

            {!pathname.includes("settings") && (
              <button onClick={(e) => handleFavClick(e)}>
                {!favProperty ? <HeartStroke /> : <HeartSolid />}
              </button>
            )}

            {wishlist && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Trash2 className="h-4 w-4 transition-colors duration-300 hover:text-red-600" />
              </button>
            )}
          </div>

          {/* Property name and location */}
          <div>
            <h3 className="font-semibold xl:text-lg">
              Emperica in Dazil, Villa
            </h3>
            <p className="text-medium flex items-center gap-x-0.5 text-xs">
              <MapPin size={10} /> Palaxisto Emeriando Plaza Road
            </p>
          </div>

          {type !== "order" ? (
            // Property info
            <ul className="mt-3 flex items-center justify-between">
              <li className="flex w-1/3 items-center justify-start gap-x-1 text-sm font-semibold">
                <BedIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">6 bd</span>
              </li>
              <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300 text-sm font-semibold">
                <BathIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">6 bt</span>
              </li>
              <li className="flex w-1/3 items-center justify-end gap-x-1 text-sm font-semibold">
                <RulerIcon className="text-primary-dark" size={18} />
                <span className="opacity-50">2.62ft</span>
              </li>
            </ul>
          ) : (
            // Property order data and time
            <p className="mt-1 text-sm">10/10/2024 - 01:30PM</p>
          )}
        </div>
      </article>
    </Link>
  );
}

export function PropertyCardLandscape({
  status,
  queryParam = "",
}: {
  status?: string;
  queryParam?: string;
}) {
  return (
    <Link
      href={
        routes.TENANT_DASHBOARD_PROPERTIES_DETAIL +
        `?property-status=${queryParam}`
      }
      className="custom-shadow-sm z-40 block rounded-lg"
    >
      <article className="flex gap-x-3 rounded-lg p-2">
        <div className="relative w-32 overflow-hidden rounded-lg">
          <Image
            src="/images/duplex.webp"
            alt="property display photo"
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>

        <div>
          {status === "upcoming" ? (
            <p className="text-xxs font-semibold text-accent">
              Upcoming - Due 21st December, 2024
            </p>
          ) : status === "overdue" ? (
            <p className="text-xxs font-semibold text-red-600">
              Overdue - Expired 15th September, 2024
            </p>
          ) : (
            ""
          )}

          <div>
            <h3 className="text-lg font-semibold">Emperica in Dazil, Villa</h3>
            <p className="text-medium flex items-center gap-x-0.5 text-sm">
              Palaxisto Emeriando Plaza Road
            </p>
          </div>

          <p className="my-2 flex items-center gap-x-1 text-lg font-bold text-primary-dark">
            ₦5,000,000
            <span className="text-[14px] font-medium text-foreground opacity-50">
              /Year
            </span>
          </p>

          <ul className="flex items-center justify-between">
            <li className="flex w-1/3 items-center justify-start gap-x-1 text-sm font-semibold">
              <BedIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">6 bd</span>
            </li>
            <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300 text-sm font-semibold">
              <BathIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">6 bt</span>
            </li>
            <li className="flex w-1/3 items-center justify-end gap-x-1 text-sm font-semibold">
              <RulerIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">2.62ft</span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}
