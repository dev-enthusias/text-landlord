import Image from "next/image";

export default function AuthLeftHandSide() {
  return (
    <div className="relative hidden h-full w-[630px] shrink-0 overflow-hidden rounded-xl bg-gray-200 px-5 py-10 lg:block">
      <Image
        src="/images/login-bg.jpg"
        alt="Photo by CHUTTERSNAP on Unsplash"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
