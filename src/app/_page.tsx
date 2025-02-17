"use client";

import WaitlistModal from "@/components/modals/waitlist";
import DropdownButton from "@/components/ui/dropdown-btn";
import ImageSlider from "@/components/ui/image-slider";
import {
  apartments,
  buildings,
  flats,
  howItWorks,
  lands,
  offices,
  rooms,
  shops,
  shortlets,
  trendingProperties,
} from "@/constants/data";
import { BathIcon, BedIcon, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaQuoteLeft,
  FaTiktok,
} from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDown } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Home({
  token,
  role,
}: {
  token: string | undefined;
  role: number | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <Header setIsOpen={setIsOpen} role={role} token={token} />
      <TrendingProperties />
      <PropertyCategories />
      <HowItWorks />
      <section className="mb-[6.25rem] px-5 lg:px-[6.25rem]">
        <section className="relative overflow-hidden rounded-3xl border-2 border-gold/50">
          <GetTheApp />
          <div className="absolute left-1/2 top-1/2 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#796425] from-5% to-[#fefaf0]/20 to-90%" />
          <div className="absolute -bottom-[250px] -left-[100px] z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#796425] to-[#fefaf0]/20" />
          <div className="from-2% absolute -top-[300px] right-0 z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d2af47] to-[#fefaf0] to-80% backdrop-blur-sm backdrop-filter" />
        </section>
      </section>
      <Testimonials />
      <Footer />
      <WaitlistModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const Header = ({
  role,
  token,
  setIsOpen,
}: {
  role: number | undefined;
  token: string | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const path =
    role === 4
      ? "/landlord"
      : role === 5
        ? "/tenant"
        : role === 7
          ? "/agent"
          : "/login";

  return (
    <header className="relative mb-[3rem] min-h-screen bg-black/40 bg-[url('/images/home-bg.jpg')] bg-cover bg-center bg-blend-overlay lg:mb-[6.25rem] lg:min-h-[90vh]">
      <nav className="flex h-16 items-center justify-between bg-white/20 px-5 backdrop-blur-lg backdrop-filter lg:h-20 lg:px-[3.25rem]">
        <img
          src="/logos/logo-transparent.png"
          alt=""
          className="mt-3.5 h-24 w-24 lg:h-28 lg:w-28"
        />

        <div className="hidden items-center space-x-4 lg:flex">
          {dropdowns.map((dropdown, index) => (
            <DropdownButton
              key={index}
              title={dropdown.title}
              items={dropdown.items}
            />
          ))}
          <div>
            <Link href="" className="px-4 py-2 text-white/80 hover:text-white">
              Land
            </Link>
          </div>
        </div>

        {token !== undefined ? (
          <Link
            href={path}
            className="hidden rounded-full bg-gradient-to-r from-black/70 to-gold/80 px-10 py-2.5 font-semibold text-white lg:block"
          >
            Dashboard
          </Link>
        ) : (
          <div className="hidden gap-x-2 lg:flex">
            <Link
              href="./register"
              className="hidden rounded-full bg-gradient-to-b from-black/20 to-white/50 px-10 py-2.5 font-semibold text-white lg:block"
            >
              Register
            </Link>
            <Link
              href="./login"
              className="hidden rounded-full bg-gold px-10 py-2.5 font-semibold text-white lg:block"
            >
              Login
            </Link>
          </div>
        )}

        <button className="text-white lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-7 w-7"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="6" y1="12" x2="18" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      <section className="absolute top-1/2 w-full -translate-y-1/2 px-5 text-center">
        <div className="mb-8 flex flex-col items-center justify-center text-center font-lato text-5xl font-bold text-white lg:text-[60px] lg:leading-[80px]">
          <div className="flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-4">
            <span>Find Your</span>
            <span className="font-cursive inline-block -rotate-3 rounded-xl border-4 border-yellow-500/40 bg-yellow-500/20 px-4 text-yellow-50">
              Perfect
            </span>{" "}
            <div className="flex w-fit items-center">
              <span>H</span>
              <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 lg:h-10 lg:w-10">
                <img src="/images/house.png" alt="" />
              </div>
              <span>me</span>
            </div>{" "}
            <span className="mr-4 lg:hidden">in</span>
            <span className="font-cursive inline-block rotate-3 rounded-xl border-4 border-yellow-500/40 bg-yellow-500/20 px-4 text-yellow-50 lg:hidden">
              Minutes
            </span>
          </div>

          {/* Second line */}
          <div className="hidden flex-wrap items-end lg:flex">
            <div className="relative mr-4 hidden h-16 w-40 rounded-xl lg:block">
              <div className="absolute inset-0 flex justify-center">
                <ImageSlider />
              </div>
            </div>
            <span className="mr-4">in</span>
            <span
              className="font-cursive inline-block rotate-3 rounded-xl border-4 border-yellow-500/40 bg-yellow-500/20 px-4 text-yellow-50"
              style={{ fontFamily: "cursive" }}
            >
              Minutes
            </span>
            <span>.</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-x-4 gap-y-2 pt-5 text-white lg:flex-row lg:items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            Become a Landlord
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="inline-block rounded-full bg-yellow-500 px-6 py-3 text-white"
          >
            Find a Home
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="inline-block rounded-full bg-accent px-6 py-3 text-white"
          >
            Become an Agent
          </button>
        </div>
      </section>

      <section
        className="absolute -bottom-8 left-1/2 hidden w-full max-w-[840px] -translate-x-1/2 grid-cols-4 gap-x-2 rounded-full bg-white p-4 lg:grid"
        style={{ boxShadow: "0px 0.8px 1px rgba(0, 0, 0, 0.13)" }}
      >
        <input
          type="text"
          placeholder="For Rent"
          className="rounded-full border border-[#d9d9d9] px-5 py-3"
        />
        <input
          type="text"
          placeholder="House"
          className="rounded-full border border-[#d9d9d9] px-5 py-3"
        />
        <input
          type="text"
          placeholder="Bali, Indonesia"
          className="rounded-full border border-[#d9d9d9] px-5 py-3"
        />
        <button className="w-full rounded-full bg-black text-white">
          Find Property
        </button>
      </section>
    </header>
  );
};

const PropertyCategories = () => {
  return (
    <section className="mb-[6.25rem] px-5 lg:px-[6.25rem]">
      <div className="mb-6 flex flex-col items-center justify-between gap-5 lg:flex-row">
        <h2 className="max-w-[440px] text-4xl font-semibold leading-[46px] text-black">
          Explore Our Property Categories
        </h2>
        <p className="max-w-[440px]">
          Find your perfect apartment among our extensive collection of
          properties. We offer a wide range of options to suit your needs, from
          cozy studios to spacious multi-bedroom apartments.
        </p>
      </div>
      <div className="grid gap-y-[3.25rem]">
        <Flats />
        <Shops />
        <Rooms />
        <Apartments />
        <Offices />
        <Shortlets />
        <Buildings />
        <Lands />
      </div>
    </section>
  );
};

const TrendingProperties = () => {
  return (
    <section className="mb-[6.25rem] px-5 lg:px-[6.25rem]">
      <div className="flex items-center justify-between">
        <h2 className="mb-6 text-4xl font-bold text-black">
          Trending Properties
        </h2>
        <button className="hidden shrink-0 items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black lg:flex">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {trendingProperties.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Rooms = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Rooms</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {rooms.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Offices = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Offices</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {offices.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: 0,
              bathrooms: 0,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Shops = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Shops</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {shops.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: 0,
              bathrooms: 0,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Lands = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Lands</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {lands.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: 0,
              bathrooms: 0,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Buildings = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Buildings</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {buildings.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: 0,
              bathrooms: 0,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Flats = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Flats</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {flats.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Shortlets = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Shortlets</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {shortlets.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Apartments = () => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black/75">Apartments</h3>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {apartments.map((property) => (
          <PropertyCard
            key={property.id}
            data={{
              image: property.image,
              price: property.price,
              location: property.location,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              size: property.size,
              name: property.name,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const dropdowns = [
  {
    title: "Residential",
    items: [
      { label: "Apartment", href: "" },
      { label: "Flat", href: "" },
      { label: "Rooms", href: "" },
    ],
  },
  {
    title: "Commercial",
    items: [
      { label: "Building", href: "" },
      { label: "Shops", href: "" },
    ],
  },
  {
    title: "Industrial",
    items: [
      { label: "Building", href: "" },
      { label: "Offices", href: "" },
      { label: "2 Bedrooms", href: "/flats/2-bedrooms" },
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="mb-[6.25rem] bg-[#fcf5e0]/50 px-5 py-[3rem] lg:px-[6.25rem] lg:py-[6.25rem]">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-4xl font-bold leading-none text-black">
          How It Works - <span className="text-xl"> Tenant</span>
        </h2>
        <p>Get started with 4 easy steps</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-4">
        {howItWorks.map((step, i) => (
          <article
            className="mx-auto max-w-[320px] text-center lg:text-left"
            key={i}
          >
            <p className="-black mb-2 text-[60px] font-extrabold text-gold">
              {i + 1}
            </p>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-black">{step.title}</h3>
                <div className="mx-auto my-2 h-[2px] w-16 bg-gold lg:mx-0 lg:my-4" />
                <p>{step.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="mb-[6.25rem] px-5 lg:px-[6.25rem]">
      <div className="mb-6 flex flex-col items-end justify-between lg:flex-row">
        <h2 className="text-4xl font-bold text-black">
          What People are Saying
        </h2>

        <div className="flex gap-x-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9]">
            <FaArrowRightLong className="-rotate-180" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e1e1e] text-[#1e1e1e]">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="no-scrollbar flex gap-x-5 overflow-x-auto">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

const GetTheApp = () => {
  return (
    <article className="relative z-50 flex items-center justify-between bg-[#fcf5e0]/40 px-2.5 pb-10 pt-10 backdrop-blur-md backdrop-filter lg:px-10">
      <div className="max-w-[640px]">
        <h2 className="mb-4 text-center text-2xl font-bold text-black lg:text-left lg:text-5xl lg:leading-[50px]">
          Download the{" "}
          <strong className="underline-squiggly">Ogalandlord App</strong> Now
          for Easy Access!
        </h2>
        <p className="text-center text-black/80 lg:text-left">
          Take Ogalandlord with you wherever you go! Download our app for easy
          access to your account, quick bookings, and exclusive mobile-only
          offers.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
          <Link
            href=""
            className="flex w-fit items-center gap-x-2 rounded-lg border-2 border-black bg-gold p-3"
          >
            <FaApple className="text-2xl text-[#433711]" />
            <div className="space-y-[1px]">
              <p className="text-[10px] leading-none text-[#433711]">
                Download on the
              </p>
              <p className="font-bold leading-none text-[#433711]">App Store</p>
            </div>
          </Link>
          <Link
            href=""
            className="flex w-fit items-center gap-x-2 rounded-lg border-2 border-black bg-gold p-3"
          >
            <IoLogoGooglePlaystore className="text-2xl text-[#433711]" />
            <div className="space-y-[1px]">
              <p className="text-[10px] leading-none text-[#433711]">
                GET IT ON
              </p>
              <p className="font-bold leading-none text-[#433711]">
                Google Play
              </p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

const TestimonialCard = () => {
  return (
    <article className="relative min-w-[280px] rounded-lg border-2 border-gold/30 bg-[#fcf5e0]/30 p-7 backdrop-blur-3xl backdrop-filter lg:p-14">
      <div className="mb-2 flex justify-between">
        <div
          className="flex flex-col justify-between text-black"
          style={{ fontFamily: "cursive" }}
        >
          Ogalandlord
          <FaQuoteLeft className="text-4xl text-gold/10" />
        </div>
        <img
          src="/images/profile-img.jpeg"
          alt="testifier photo"
          className="h-24 w-24 rounded-bl-full object-cover"
        />
      </div>
      <p className="mb-4 font-open-sans text-lg leading-7 text-black/80 lg:text-xl">
        Finding my new apartment with Ogalandlord was a breeze! Their platform
        is super easy to navigate, and I found exactly what I was looking for in
        no time. I highly recommend it to anyone searching for a new place to
        call home.
      </p>

      <div className="text-base">
        <h3 className="font-bold text-[#1e1e1e]">Anatoly Greyman</h3>
        <p>Business Man</p>
      </div>

      <div className="absolute bottom-7 right-7 h-0 w-0 border-b-[112px] border-l-[112px] border-b-gold/10 border-l-transparent lg:bottom-14 lg:right-14" />
    </article>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black/70 bg-[url('/images/brown-chair.jpg')] bg-cover bg-[center_bottom_-4rem] bg-no-repeat px-5 pb-5 pt-[3rem] text-white bg-blend-overlay lg:px-[6.25rem] lg:pt-[6.26rem]">
      {/* Useful links */}
      <section className="mb-10 flex flex-wrap gap-x-20 gap-y-10 lg:mb-20 lg:justify-between">
        <section className="max-w-[420px]">
          <div className="mb-4 h-16 overflow-hidden">
            <img
              src="/logos/logo-transparent.png"
              alt=""
              className="-mt-4 h-32 w-32"
            />
          </div>
          <p className="opacity-80">
            Find your perfect home or find reliable tenants quickly. Our
            platform seamlessly connects quality tenants with their ideal homes
            and landlords with eager prospects, ensuring you find your next home
            or showcase your property faster.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold">Residential</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Apartment
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Flat
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Shortlet
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="mb-4 text-lg font-bold">Industrial</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Building
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Offices
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="mb-4 text-lg font-bold">Commercial</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Building
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Shops
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="mb-4 text-lg font-bold">Land</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <Link href="" className="hover:text-[#cecaa3] hover:underline">
                Land
              </Link>
            </li>
          </ul>
        </section>
        <section className="hidden lg:block">
          <h3 className="mb-4 text-lg font-bold">Get the App</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href=""
                className="flex items-center gap-x-1 rounded-lg border-2 border-[#f1ca53] p-2"
              >
                <FaApple className="text-xl text-[#f4d57d]" />
                <div className="space-y-[1px]">
                  <p className="text-[8px] leading-none text-[#f8e5b1]/90">
                    Download on the
                  </p>
                  <p className="text-sm font-bold leading-none text-[#f1ca53]">
                    App Store
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-x-1 rounded-lg border-2 border-[#f1ca53] p-2"
              >
                <IoLogoGooglePlaystore className="text-xl text-[#f4d57d]" />
                <div className="space-y-[1px]">
                  <p className="text-[8px] leading-none text-[#f8e5b1]/90">
                    GET IT ON
                  </p>
                  <p className="text-sm font-bold leading-none text-[#f1ca53]">
                    Google Play
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </section>

      {/* Support Links and Social Media Handles */}
      <section className="mb-10 flex flex-col justify-center gap-x-10 gap-y-5 lg:flex-row lg:items-center">
        <Link href="" className="flex items-center gap-x-2">
          <BiSupport size={26} />
          support@ogalandlord.com
        </Link>
        <Link href="" className="flex items-center gap-x-2">
          <FaPhoneAlt size={20} />
          +2349080010168
        </Link>
        <div className="flex gap-x-4">
          <Link
            href=""
            className="flex items-center justify-center rounded-full bg-[#cecaa3] p-3 text-xl text-black"
          >
            <FaFacebook />
          </Link>
          <Link
            href=""
            className="flex items-center justify-center rounded-full bg-[#cecaa3] p-3 text-xl text-black"
          >
            <FaInstagram />
          </Link>
          <Link
            href=""
            className="flex items-center justify-center rounded-full bg-[#cecaa3] p-3 text-xl text-black"
          >
            <FaXTwitter />
          </Link>
          <Link
            href=""
            className="flex items-center justify-center rounded-full bg-[#cecaa3] p-3 text-xl text-black"
          >
            <FaTiktok />
          </Link>
        </div>
      </section>

      <section className="mb-10 lg:hidden">
        <h3 className="mb-4 text-lg font-bold">Get the App</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href=""
              className="flex w-fit items-center gap-x-1 rounded-lg border-2 border-[#f1ca53] p-2"
            >
              <FaApple className="text-xl text-[#f4d57d]" />
              <div className="space-y-[1px]">
                <p className="text-[8px] leading-none text-[#f8e5b1]/90">
                  Download on the
                </p>
                <p className="text-sm font-bold leading-none text-[#f1ca53]">
                  App Store
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex w-fit items-center gap-x-1 rounded-lg border-2 border-[#f1ca53] p-2"
            >
              <IoLogoGooglePlaystore className="text-xl text-[#f4d57d]" />
              <div className="space-y-[1px]">
                <p className="text-[8px] leading-none text-[#f8e5b1]/90">
                  GET IT ON
                </p>
                <p className="text-sm font-bold leading-none text-[#f1ca53]">
                  Google Play
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      {/* Copyright, Terms and Conditions */}
      <section className="flex flex-col-reverse justify-between gap-y-4 border-t border-t-[#e3e3e3] pt-5 text-sm lg:flex-row">
        <p>© 2024 Oga LandLords. All Rights Reserved.</p>
        <div className="flex justify-between gap-x-4">
          <Link
            href=""
            className="inline-block transition-all duration-300 hover:text-[#cecaa3] hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href=""
            className="inline-block transition-all duration-300 hover:text-[#cecaa3] hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </section>
    </footer>
  );
};

const PropertyCard = ({
  data,
}: {
  data: {
    image: string;
    price: string;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
    size: string;
    name: string;
  };
}) => {
  return (
    <article className="block w-full rounded-lg border bg-white p-2 font-lato shadow-gold transition duration-300 ease-out hover:shadow-lg">
      <article className="group flex sm:flex-col">
        <div className="relative w-20 shrink-0 overflow-hidden rounded-lg shadow min-[400px]:w-36 sm:h-36 sm:w-auto sm:min-w-[240px] lg:min-w-fit">
          <Image
            src={data.image}
            alt="property display photo"
            fill
            sizes="(max-width: 400px) 80px, (max-width: 768px) 144px, 25vw"
            className="w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>

        <div className="grow pt-2">
          <div className="px-2">
            {/* Property value & Status */}
            <div className="flex justify-between">
              <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
                {data.price}
                <span className="text-xs font-medium text-gray-500 opacity-80">
                  / year
                </span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-600">{data.name}</h3>
              <p className="text-xs capitalize tracking-wide">
                {data.location || "Add the address for this property"}
              </p>
            </div>

            <ul className="mt-2 flex items-center justify-between text-[10px] min-[400px]:text-xs">
              <li className="flex w-1/3 items-center justify-start gap-x-1">
                <BedIcon size={14} />
                <span>{data.bedrooms || 0} bd</span>
              </li>
              <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300">
                <BathIcon size={14} />
                <span>{data.bathrooms || 0} bt</span>
              </li>
              <li className="flex w-1/3 items-center justify-end gap-x-1">
                <RulerIcon size={14} />
                <span>{data.size || 0}</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </article>
  );
};

// "I had a few questions during the process, and the Finpro support team was incredibly helpful. They were responsive, friendly, and went above and beyond to assist me. I'm very satisfied with my experience."

// "I was impressed by the wide range of property options available on Finpro. I found exactly the type of apartment I was looking for, in the neighborhood I wanted, and at a price that fit my budget. Thank you, Finpro!"
