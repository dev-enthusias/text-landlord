"use client";

import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import LoadingSpinner from "./loading-spinner";
import { removeFromCart } from "@/api/services/cart";
import revalidate from "@/utils/revalidate";
import { toast } from "sonner";

export default function RemovePropertyFromCart({ id }: { id: number }) {
  const [isRemoving, setRemoving] = useState(false);

  const removePropertyFromCart = async () => {
    setRemoving(true);
    try {
      const res = await removeFromCart(id);
      if (res.status) {
        revalidate("/tenant/cart");
        toast.success("Success", { description: "Property removed from cart" });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setRemoving(false);
    }
  };

  return (
    <button
      onClick={removePropertyFromCart}
      className="flex items-center gap-x-1 font-semibold text-gold text-sm"
    >
      {isRemoving ? (
        <LoadingSpinner className="border-gold border-t-transparent" />
      ) : (
        <AiOutlineDelete />
      )}
      {isRemoving ? <p>Removing</p> : "Remove"}
    </button>
  );
}
