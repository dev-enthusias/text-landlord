import Image from "next/image";

export default function PropertyPhoto({ photo }: { photo: string }) {
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
