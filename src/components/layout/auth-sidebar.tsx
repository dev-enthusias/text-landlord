import Image from "next/image";

export default function AuthLeftHandSide() {
  return (
    <div className="relative hidden h-full shrink-0 overflow-hidden rounded-xl bg-gray-200 px-5 py-10 lg:block lg:w-[580px] xl:w-[630px]">
      <Image
        src="/images/login-bg.jpg"
        alt="Photo by CHUTTERSNAP on Unsplash"
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
