import Image from "next/image";

export default function Success() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative h-80 w-80">
        <Image fill src={"/images/success-image.jpg"} alt="success" />
      </div>
    </div>
  );
}
