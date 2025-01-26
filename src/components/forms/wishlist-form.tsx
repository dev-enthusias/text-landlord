import { togglePropertyInWishlist } from "@/api/services/wishlist";
import { useForm } from "react-hook-form";
import { PiHeart, PiHeartFill } from "react-icons/pi";

export default function WishlistForm({
  state,
  id,
}: {
  state: boolean;
  id: number;
}) {
  const { handleSubmit } = useForm<{ property_id: number }>({
    defaultValues: {
      property_id: id,
    },
  });

  const onSubmit = async (data: { property_id: number }) => {
    const res = await togglePropertyInWishlist(data.property_id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="property_id" />
      <button className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 transition-colors duration-300 ease-out hover:bg-gold/20">
        {state ? (
          <PiHeart className="text-xl group-hover:text-black" />
        ) : (
          <PiHeartFill className="text-xl text-gold" />
        )}
      </button>
    </form>
  );
}
