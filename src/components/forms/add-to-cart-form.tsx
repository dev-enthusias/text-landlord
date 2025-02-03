"use client";

import { addToCart } from "@/api/services/cart";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../ui/loading-spinner";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

export default function AddToCartButton({
  values,
  className = "w-full rounded-full bg-gold px-4 py-2 text-sm font-bold text-white flex items-center gap-x-2 justify-center",
}: {
  className?: string;
  values: { propertyId: number; amount: number; advertisementId: number };
}) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      property_id: values.propertyId,
      amount: values.amount,
      advertisement_id: values.advertisementId,
    },
  });

  const onSubmit = async (data: any) => {
    const response = await addToCart(data);
    if (response.status) {
      toast.success("Success", { description: "Successfully added to cart" });
      revalidate("/tenant", "layout");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("property_id")} />
      <input type="hidden" {...register("amount")} />
      <input type="hidden" {...register("advertisement_id")} />

      <button className={className}>
        Add to Cart {isSubmitting && <LoadingSpinner />}
      </button>
    </form>
  );
}
