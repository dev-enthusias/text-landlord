"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import {
  Edit2Icon,
  HomeIcon,
  MapPin,
  MessageCircle,
  PhoneCall,
  Trash2,
} from "lucide-react";
import ModalLayout from "./modal-layout";
import AddEditTenant from "./add-edit-tenant";

export default function TenantCard() {
  const router = useRouter();
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <Link href={routes.LANDLORD_DASHBOARD_TENANTS + "/0"}>
        <article className="custom-shadow flex cursor-pointer flex-col items-center rounded-xl px-3 pt-5">
          <div className="relative mb-2 h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/profile-img.jpeg"
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <div className="text-center text-sm font-medium lg:text-[14px]">
            <h3 className="text-lg font-semibold">Mara Juice</h3>
            <p className="flex items-center justify-center gap-x-1 opacity-80">
              <HomeIcon size={13} />
              Marculey Avenue Lounge
            </p>
            <p className="flex items-center justify-center gap-x-1 truncate opacity-80">
              <MapPin size={13} className="shrink-0" /> Emeritus express road,
              Abuja
            </p>
          </div>

          <div className="mt-4 flex w-full items-center justify-around gap-x-7 border-t py-3 lg:justify-end lg:px-5">
            <button className="lg:hidden" onClick={(e) => handleBtnClick(e)}>
              <PhoneCall size={18} className="opacity-80" />
            </button>
            <button
              className="transition-color group relative duration-300 hover:text-accent"
              onClick={(e) => {
                handleBtnClick(e);
                router.push(routes.LANDLORD_DASHBOARD_CHAT + "/0");
              }}
            >
              <span className="absolute -top-2.5 hidden text-xxs font-semibold group-hover:inline-block">
                Chat
              </span>
              <MessageCircle size={18} className="opacity-80" />
            </button>
            <button
              className="transition-color group relative duration-300 hover:text-accent"
              onClick={(e) => {
                handleBtnClick(e);
                setAddTenantModal(true);
              }}
            >
              <span className="absolute -top-3 hidden text-xxs font-semibold group-hover:inline-block">
                Edit
              </span>
              <Edit2Icon size={18} className="opacity-80" />
            </button>
            <button
              className="transition-color duration-300 hover:text-red-700"
              onClick={(e) => handleBtnClick(e)}
            >
              <Trash2 size={18} className="opacity-80" />
            </button>
          </div>
        </article>
      </Link>

      {isAddTenantModalOpen && (
        <ModalLayout>
          <AddEditTenant setAddTenantModal={setAddTenantModal} title="Edit" />
        </ModalLayout>
      )}
    </>
  );
}
