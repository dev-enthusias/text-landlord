"use client";
import { useState } from "react";
import { CartProperty } from "@/definition";
import { createOrder } from "@/api/services/order";
import LoadingSpinner from "../ui/loading-spinner";
import { getLandlordSplitDetails, initializeTrx } from "@/api/services/payment";
import { toast } from "sonner";
import { getAdvertisedPropertyDetails } from "@/api/services/property";

export default function CheckoutButton({
  cartItems,
}: {
  cartItems: CartProperty["data"];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Validate cart items exist
      if (cartItems.length === 0) {
        toast.error("No items in cart");
        return;
      }

      // Perform sequential processing for each cart item
      for (const item of cartItems) {
        // Get property detail
        const propertyDetail = await getAdvertisedPropertyDetails(
          item.advertisement_id,
        );

        // 1. Get Split Details
        const splitDetailsResult = await getLandlordSplitDetails(
          propertyDetail.data.advertisement.property_creator_id,
        );

        if (splitDetailsResult.data?.split_code === null) {
          toast.error(
            `Failed to get account details for ${item.property.name}`,
          );
          continue;
        }

        // 2. Create Order
        const orderResult = await createOrder({
          grand_total: item.amount,
          cart_id: item.id,
        });

        if (!orderResult.data?.id) {
          toast.error("Failed to create order", {
            description: orderResult.error,
          });
          return;
        }

        // 3. Initialize Transaction
        const trxResult = await initializeTrx({
          email: "landlord@ogalandlord.com",
          amount: +item.amount,
          split_code: splitDetailsResult.data.split_code,
          payment_type: "order",
          id: orderResult.data.id,
        });

        // Optional: Handle transaction initialization result
        if (!trxResult) {
          toast.error("Transaction initialization failed");
          return;
        }

        // Success toast for each item (optional)
        toast.success(`Checkout successful for item: ${item.property.name}`);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An unexpected error occurred during checkout");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onSubmit}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
    >
      Checkout {isSubmitting && <LoadingSpinner />}
    </button>
  );
}
