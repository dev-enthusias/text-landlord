import Link from "next/link";
import Image from "next/image";
import { BackButton } from "@/components/ui/prev-page";
import PageLayout from "@/components/layout/page-layout";
import { BsChat } from "react-icons/bs";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { SiStatuspal } from "react-icons/si";
import { BathIcon, BedIcon, Handshake, RulerIcon } from "lucide-react";
import { routes } from "@/constants/routes";

export default function PropertyDetails() {
  return (
    <PageLayout>
      <main className="px-20 py-7 pb-20">
        <div className="mb-8 flex justify-between">
          <BackButton />

          <p className="text-sm">
            Properties / <span className="text-black">Details</span>
          </p>
        </div>

        <section className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="font-roboto text-2xl font-semibold text-black">
              Emperica Havilla Villa
            </h1>
            <p className="flex gap-x-2 text-sm tracking-wide">
              <span>Rent</span> | <span>Apartment</span> | <span>Lagos</span>
            </p>
          </div>
          <button className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-colors duration-300 ease-out hover:bg-gold/20">
            {false ? (
              <PiHeart className="text-xl group-hover:text-black" />
            ) : (
              <PiHeartFill className="text-xl text-gold" />
            )}
          </button>
        </section>

        <section className="mb-6 grid h-[80vh] grid-cols-4 grid-rows-3 gap-5">
          <div className="relative col-span-3 row-span-3 overflow-hidden rounded-xl">
            <Image
              src="/images/duplex.webp"
              alt="Photo of apartment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image-2.jpeg"
              alt="photo of apartment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image-3.jpeg"
              alt="photo of apartment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image-2.jpeg"
              alt="photo of apartment"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid grid-cols-5 gap-x-10">
          <div className="col-span-3 grid gap-y-10">
            <section>
              <h2 className="mb-1 font-roboto text-xl font-medium text-black">
                Description
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt enim mollitia rem excepturi, illum cupiditate voluptate
                odit eius quibusdam minus quaerat molestias reprehenderit ipsa
                nam, sit odio magni laboriosam sunt deleniti commodi nostrum
                nemo. Asperiores, laudantium! Autem tenetur fugiat omnis, ipsum
                atque quae, dignissimos cum distinctio molestias itaque
                accusamus expedita.
              </p>
            </section>

            <section>
              <h2 className="mb-1 font-roboto text-xl font-medium text-black">
                Features
              </h2>
              <ul className="flex flex-col gap-y-5">
                <li className="flex gap-x-2">
                  <BedIcon size={20} className="text-gray-600" />
                  <span>6 bedrooms</span>
                </li>
                <li className="flex gap-x-2">
                  <BathIcon size={20} className="text-gray-600" />
                  <span>6 bathrooms</span>
                </li>
                <li className="flex gap-x-2">
                  <RulerIcon size={20} className="text-gray-600" />
                  <span>2.62 square feet</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="col-span-2 flex flex-col gap-y-10">
            <section>
              <h2 className="mb-2 font-roboto text-xl font-medium text-black">
                Property Owner
              </h2>
              <article className="flex items-center justify-between">
                <div className="flex items-start gap-x-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src="/images/profile-img.jpeg"
                      alt="property owner photo"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm text-black">Sograh Emilafia</h3>
                    <p className="text-xs">sograyemilafi@ogalandlords.com</p>
                  </div>
                </div>
                <Link
                  href={routes.CHAT + "/0"}
                  className="flex items-center gap-x-2 rounded-full bg-white px-4 py-1.5 font-roboto text-sm font-semibold text-gold shadow-lg transition-all duration-300 ease-out hover:shadow"
                >
                  <BsChat /> Chat
                </Link>
              </article>
            </section>

            <section className="space-y-5 rounded-xl bg-white p-5">
              <p className="text-xl font-bold text-accent">
                ₦500,000{" "}
                <span className="text-base font-normal text-gray-500">
                  / year
                </span>
              </p>

              <div className="flex flex-wrap justify-between gap-5 rounded-lg bg-background px-5 py-4 text-lg">
                <div className="flex items-start gap-x-3">
                  <Handshake size={20} className="mt-1 text-gray-600" />
                  <div>
                    <p>Down Payment</p>
                    <p className="font-semibold text-gray-600">₦350,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <SiStatuspal size={20} className="mt-1 text-gray-600" />
                  <div>
                    <p>Availability</p>
                    <p className="font-semibold text-gray-600">
                      3 vacant rooms
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-full bg-gold py-3 text-lg font-bold text-white">
                Add to Cart
              </button>
            </section>
          </div>

          <section className="col-span-5 mt-10">
            <h2 className="mb-1 font-roboto text-xl font-medium text-black">
              Location
            </h2>
            <p className="mb-4">Somewhere in Bgbadagri, inside Oshodi</p>

            <div className="relative h-48">
              <Image
                src="/images/map.jpg"
                alt="Propery location on map"
                fill
                quality={100}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </section>
        </section>
      </main>
    </PageLayout>
  );
}
