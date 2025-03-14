import Image from "next/image";

export default function PropertyPhoto({
  photo,
  status,
}: {
  photo: string;
  status?: "pending" | "approved";
}) {
  return (
    <div className="relative w-36 overflow-hidden rounded-lg shadow sm:h-36 sm:w-auto sm:min-w-[240px] lg:min-w-fit">
      <Image
        src={photo}
        alt="property display photo"
        fill
        sizes="384px"
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />
      {status && (
        <p className="absolute right-1 top-1 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold capitalize text-black">
          {status}
        </p>
      )}
    </div>
  );
}
