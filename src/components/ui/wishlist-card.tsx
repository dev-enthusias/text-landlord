"use client";

import Image from "next/image";
import { BathIcon, BedIcon, RulerIcon, Trash2 } from "lucide-react";
import { togglePropertyInWishlist } from "@/api/services/wishlist";
import { useForm } from "react-hook-form";
import LoadingSpinner from "./loading-spinner";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

interface WishlistPropertyCardProps {
  data: {
    id: number;
    image: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    name: string;
    address: string | null;
  };
}

export function WishlistPropertyCard({ data }: WishlistPropertyCardProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      property_id: data.id,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await togglePropertyInWishlist(data);

      if (response.status) {
        toast.success("Success", { description: response.message });
      }
      revalidate("/tenant/wishlist");
    } catch (error) {
      console.error("Something aint right", error);
    }
  };

  return (
    <article className="block w-full rounded-lg border bg-white p-2 font-lato shadow-gold transition duration-300 ease-out hover:shadow-lg">
      <div className="group flex gap-x-1 sm:flex-col">
        <PropertyPhoto photo={data.image} />

        <div className="grow pt-2">
          <div className="px-2">
            <div className="flex justify-between">
              <PropertyPrice price={data.price} />

              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("property_id")} />
                <button type="submit">
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <Trash2 className="h-4 w-4 transition-colors duration-300 hover:text-red-600" />
                  )}
                </button>
              </form>
            </div>

            <PropertyNameAndLocation
              data={{ name: data.name, address: data.address ?? "" }}
            />

            <PropertyFeatures
              bedrooms={data.bedrooms}
              bathrooms={data.bathrooms}
              size={data.size}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

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
  data: { name: string; address: string };
}) {
  return (
    <div>
      <h3 className="font-bold text-gray-600">{data.name}</h3>
      <p className="text-xs capitalize tracking-wide">{data.address}</p>
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
