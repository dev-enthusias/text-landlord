import DropdownButton from "@/components/ui/dropdown-btn";
import { howItWorks } from "@/constants/data";
import { getRole, getToken } from "@/lib/actions";
import { BathIcon, BedIcon, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <TrendingProperties />
      <PropertyCategories />
      <HowItWorks />
      <section className="mb-[6.25rem] px-[6.25rem]">
        <section className="relative overflow-hidden rounded-3xl border-2 border-gold/50">
          <GetTheApp />
          <div className="absolute left-1/2 top-1/2 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#796425] from-5% to-[#fefaf0]/20 to-90%" />
          <div className="absolute -bottom-[250px] -left-[100px] z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#796425] to-[#fefaf0]/20" />
          <div className="from-2% absolute -top-[300px] right-0 z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d2af47] to-[#fefaf0] to-80% backdrop-blur-sm backdrop-filter" />
        </section>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}

const Header = async () => {
  const token = await getToken();
  const role = await getRole();
  const path =
    role === 4
      ? "/landlord"
      : role === 5
        ? "/tenant"
        : role === 7
          ? "/agent"
          : "/login";

  return (
    <header className="relative mb-[6.25rem] min-h-[90vh] bg-black/40 bg-[url('/images/home-bg.jpg')] bg-cover bg-center bg-blend-overlay">
      <nav className="flex h-16 items-center justify-between bg-white/20 px-[3.25rem] backdrop-blur-lg backdrop-filter lg:h-20">
        <img
          src="/logos/logo-transparent.png"
          alt=""
          className="mt-3.5 h-28 w-28"
        />

        <div className="flex items-center space-x-4">
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
          <div className="flex gap-x-2">
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
      </nav>

      <section className="absolute top-1/2 w-full -translate-y-1/2 px-5 text-center">
        <h1 className="font-lato text-[60px] font-bold leading-[60px] text-white">
          Find Your Perfect{" "}
          <span
            className="font-cursive text-yellow-500"
            style={{ fontFamily: "cursive" }}
          >
            Home
          </span>{" "}
          <span className="block">in Minutes.</span>
        </h1>

        <div className="flex items-center justify-center gap-x-4 pt-5 text-white">
          <button className="rounded-full bg-yellow-500 px-6 py-3 text-black">
            List a Property
          </button>
          <span>or</span>
          <button className="rounded-full bg-yellow-500 px-6 py-3 text-black">
            Find a Home
          </button>
        </div>
      </section>

      <section
        className="absolute -bottom-8 left-1/2 grid max-w-[840px] -translate-x-1/2 grid-cols-4 gap-x-2 rounded-full bg-white p-4"
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
        <button className="rounded-full bg-black text-white">
          Find Property
        </button>
      </section>
    </header>
  );
};

const PropertyCategories = () => {
  return (
    <section className="mb-[6.25rem] px-[6.25rem]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="max-w-[440px] text-4xl font-semibold leading-[46px] text-black">
          Explore Our Property Categories
        </h2>
        <p className="max-w-[440px] text-sm">
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
    <section className="mb-[6.25rem] px-[6.25rem]">
      <div className="flex items-center justify-between">
        <h2 className="mb-6 text-4xl font-bold text-black">
          Trending Properties
        </h2>
        <button className="flex items-center gap-x-2 rounded-full border border-black px-4 py-2 text-sm text-black">
          See More
          <IoMdArrowDown className="-rotate-[135deg]" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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

      <div className="grid grid-cols-4 gap-x-5">
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
    <section className="mb-[6.25rem] bg-[#fcf5e0]/50 px-[6.25rem] py-[6.25rem]">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-black">
          How It Works - <span className="text-xl"> Tenant</span>
        </h2>
        <p>Get started with 4 easy steps</p>
      </div>

      <div className="grid gap-x-10 lg:grid-cols-4">
        {howItWorks.map((step, i) => (
          <article className="max-w-[320px]" key={i}>
            <p className="-black mb-2 text-[60px] font-extrabold text-gold">
              {i + 1}
            </p>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-black">{step.title}</h3>
                <div className="my-4 h-[2px] w-16 bg-gold" />
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
    <section className="mb-[6.25rem] px-[6.25rem]">
      <div className="mb-6 flex items-end justify-between">
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
      <div className="grid gap-x-5 lg:grid-cols-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

const GetTheApp = () => {
  return (
    <article className="relative z-50 flex items-center justify-between bg-[#fcf5e0]/40 px-10 pb-10 pt-10 backdrop-blur-md backdrop-filter">
      <div className="max-w-[640px]">
        <h2 className="mb-4 text-5xl font-bold leading-[50px] text-black">
          Download the{" "}
          <strong className="underline-squiggly">Ogalandlord App</strong> Now
          for Easy Access!
        </h2>
        <p className="text-black/80">
          Take Ogalandlord with you wherever you go! Download our app for easy
          access to your account, quick bookings, and exclusive mobile-only
          offers.
        </p>
        <div className="mt-6 flex gap-x-4">
          <Link
            href=""
            className="flex items-center gap-x-2 rounded-lg border-2 border-black bg-gold p-3"
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
            className="flex items-center gap-x-2 rounded-lg border-2 border-black bg-gold p-3"
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
    <article className="relative rounded-lg border-2 border-gold/30 bg-[#fcf5e0]/30 p-14 backdrop-blur-3xl backdrop-filter">
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
      <p className="mb-4 font-open-sans text-xl leading-7 text-black/80">
        Finding my new apartment with Ogalandlord was a breeze! Their platform
        is super easy to navigate, and I found exactly what I was looking for in
        no time. I highly recommend it to anyone searching for a new place to
        call home.
      </p>

      <div className="text-base">
        <h3 className="font-bold text-[#1e1e1e]">Anatoly Greyman</h3>
        <p>Business Man</p>
      </div>

      <div className="absolute bottom-14 right-14 h-0 w-0 border-b-[112px] border-l-[112px] border-b-gold/10 border-l-transparent" />
    </article>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black/70 bg-[url('/images/brown-chair.jpg')] bg-cover bg-[center_bottom_-4rem] bg-no-repeat px-[6.25rem] pb-5 pt-[6.26rem] text-white bg-blend-overlay">
      {/* Useful links */}
      <section className="mb-20 flex flex-wrap justify-between gap-5 lg:gap-x-20">
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
        <section>
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
      <section className="mb-10 flex items-center justify-center gap-x-10">
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

      {/* Copyright, Terms and Conditions */}
      <section className="flex justify-between border-t border-t-[#e3e3e3] pt-5">
        <p>© 2024 Oga LandLords. All Rights Reserved.</p>
        <div className="flex gap-x-4">
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

const trendingProperties = [
  {
    id: 1,
    name: "Luxury Haven Duplex",
    image: "/images/tp-1.jpg",
    price: "₦80,000,000",
    location: "Abuja",
    bedrooms: 4,
    bathrooms: 3,
    size: "3,500 sqft",
  },
  {
    id: 2,
    name: "Coastal View Apartment",
    image: "/images/tp-2.jpg",
    price: "₦35,000,000",
    location: "Port Harcourt",
    bedrooms: 3,
    bathrooms: 2,
    size: "2,200 sqft",
  },
  {
    id: 3,
    name: "Ikoyi Prestige Villa",
    image: "/images/tp-3.jpeg",
    price: "₦60,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 5,
    bathrooms: 5,
    size: "4,500 sqft",
  },
  {
    id: 4,
    name: "Banana Island Mansion",
    image: "/images/tp-4.jpeg",
    price: "₦120,000,000",
    location: "Banana Island, Lagos",
    bedrooms: 6,
    bathrooms: 7,
    size: "6,000 sqft",
  },
];

const apartments = [
  {
    id: 1,
    name: "Elegant City View Apartment",
    image: "/images/a-1.jpg",
    price: "₦25,000,000",
    location: "Victoria Island, Lagos",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 sqft",
  },
  {
    id: 2,
    name: "Modern Urban Retreat",
    image: "/images/a-2.jpg",
    price: "₦1,500,000",
    location: "Awka, Anambra",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,200 sqft",
  },
  {
    id: 3,
    name: "Sleek Contemporary Apartment",
    image: "/images/a-3.jpeg",
    price: "₦20,000,000",
    location: "Abuja",
    bedrooms: 6,
    bathrooms: 3,
    size: "1,000 sqft",
  },
  {
    id: 4,
    name: "Luxury Penthouse Suite",
    image: "/images/a-4.jpg",
    price: "₦50,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 4,
    bathrooms: 3,
    size: "2,200 sqft",
  },
];

const rooms = [
  {
    id: 1,
    name: "Opulent Suite Room",
    image: "/images/r-1.jpg",
    price: "₦5,000,000",
    location: "Victoria Island, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "450 sqft",
  },
  {
    id: 2,
    name: "Grand Deluxe Room",
    image: "/images/r-2.jpg",
    price: "₦18,000,000",
    location: "Lekki, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "400 sqft",
  },
  {
    id: 3,
    name: "Prestigious Executive Room",
    image: "/images/r-3.jpg",
    price: "₦30,000,000",
    location: "Abuja",
    bedrooms: 1,
    bathrooms: 1,
    size: "500 sqft",
  },
  {
    id: 4,
    name: "Regal Chamber Suite",
    image: "/images/r-4.jpeg",
    price: "₦22,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "420 sqft",
  },
];

const offices = [
  {
    id: 1,
    name: "Prestige Corporate Office",
    image: "/images/o-1.jpg",
    price: "₦42,000,000",
    location: "Victoria Island, Lagos",
    meetingRooms: 2,
    restrooms: 2,
    size: "2,500 sqft",
  },
  {
    id: 2,
    name: "Executive Business Center",
    image: "/images/o-2.webp",
    price: "₦57,000,000",
    location: "Central Business District, Abuja",
    meetingRooms: 3,
    restrooms: 3,
    size: "3,000 sqft",
  },
  {
    id: 3,
    name: "Modern Office Hub",
    image: "/images/o-3.avif",
    price: "₦38,000,000",
    location: "Trans-Amadi, Port Harcourt",
    meetingRooms: 1,
    restrooms: 1,
    size: "1,800 sqft",
  },
  {
    id: 4,
    name: "Luxury Executive Suites",
    image: "/images/o-4.webp",
    price: "₦68,000,000",
    location: "New Haven, Enugu",
    meetingRooms: 4,
    restrooms: 3,
    size: "3,500 sqft",
  },
];

const shops = [
  {
    id: 1,
    name: "Budget Retail Space",
    image: "/images/s-1.jpg",
    price: "₦4,000,000",
    location: "Ikeja, Lagos",
    size: "800 sqft",
  },
  {
    id: 4,
    name: "Compact Shop Space",
    image: "/images/s-4.jpeg",
    price: "₦800,000",
    location: "Port Harcourt, Rivers State",
    size: "700 sqft",
  },
  {
    id: 2,
    name: "Affordable Storefront",
    image: "/images/s-2.jpg",
    price: "₦3,500,000",
    location: "Wuse, Abuja",
    size: "600 sqft",
  },
  {
    id: 3,
    name: "Economy Commercial Outlet",
    image: "/images/s-3.jpeg",
    price: "₦1,200,000",
    location: "Oredo, Benin City",
    size: "750 sqft",
  },
];

const flats = [
  {
    id: 1,
    name: "Modern Urban Flat",
    image: "/images/f-1.jpeg",
    price: "₦4,500,000",
    location: "Warri, Delta State",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,100 sqft",
  },
  {
    id: 2,
    name: "Contemporary Comfort Flat",
    image: "/images/f-2.jpeg",
    price: "₦3,000,000",
    location: "Kaduna, Kaduna State",
    bedrooms: 2,
    bathrooms: 1,
    size: "1,000 sqft",
  },
  {
    id: 3,
    name: "Cozy Family Flat",
    image: "/images/f-3.jpeg",
    price: "₦5,000,000",
    location: "Awka, Anambra State",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,300 sqft",
  },
  {
    id: 4,
    name: "Elegant City Flat",
    image: "/images/f-4.jpeg",
    price: "₦6,500,000",
    location: "Uyo, Akwa Ibom State",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,400 sqft",
  },
];

const shortlets = [
  {
    id: 1,
    name: "Downtown Executive Shortlet",
    image: "/images/sl-1.jpeg",
    price: "₦7,500,000",
    location: "Lekki Phase 1, Lagos",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,200 sqft",
  },
  {
    id: 2,
    name: "Cozy Central Shortlet",
    image: "/images/sl-2.jpeg",
    price: "₦5,000,000",
    location: "Maitama, Abuja",
    bedrooms: 1,
    bathrooms: 1,
    size: "800 sqft",
  },
  {
    id: 3,
    name: "Modern Shortlet Retreat",
    image: "/images/sl-3.jpeg",
    price: "₦6,500,000",
    location: "Old GRA, Port Harcourt",
    bedrooms: 1,
    bathrooms: 1,
    size: "900 sqft",
  },
  {
    id: 4,
    name: "Luxury Shortlet Suite",
    image: "/images/sl-4.jpeg",
    price: "₦9,000,000",
    location: "Uyo, Akwa Ibom",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,400 sqft",
  },
];

const lands = [
  {
    id: 1,
    name: "Prime Commercial Plot",
    image: "/images/l-1.jpeg",
    price: "₦18,000,000",
    location: "Ikeja, Lagos",
    size: "5,000 sqft",
  },
  {
    id: 2,
    name: "Residential Plot in Gated Estate",
    image: "/images/l-2.jpg",
    price: "₦16,000,000",
    location: "Garki, Abuja",
    size: "4,000 sqft",
  },
  {
    id: 3,
    name: "Farmland Opportunity",
    image: "/images/l-3.jpeg",
    price: "₦10,000,000",
    location: "Diobu, Port Harcourt",
    size: "8,000 sqft",
  },
  {
    id: 4,
    name: "Development Opportunity Plot",
    image: "/images/l-4.jpeg",
    price: "₦12,000,000",
    location: "Ilesa, Osun State",
    size: "3,500 sqft",
  },
];

const buildings = [
  {
    id: 1,
    name: "Iconic Commercial Tower",
    image: "/images/b-1.jpg",
    price: "₦120,000,000",
    location: "Ikeja, Lagos",
    floors: 10,
    size: "15,000 sqft",
  },
  {
    id: 2,
    name: "Modern Mixed-use Complex",
    image: "/images/b-2.jpg",
    price: "₦95,000,000",
    location: "Jabi, Abuja",
    floors: 8,
    size: "12,000 sqft",
  },
  {
    id: 3,
    name: "High-end Residential Building",
    image: "/images/b-3.jpeg",
    price: "₦80,000,000",
    location: "Sango, Ibadan",
    floors: 5,
    size: "10,000 sqft",
  },
  {
    id: 4,
    name: "Prestigious Office Building",
    image: "/images/b-4.webp",
    price: "₦150,000,000",
    location: "GRA, Kano",
    floors: 12,
    size: "20,000 sqft",
  },
];

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
      <article className="group flex gap-x-1 sm:flex-col">
        <div className="relative w-36 overflow-hidden rounded-lg shadow sm:h-36 sm:w-auto sm:min-w-[240px] lg:min-w-fit">
          <Image
            src={data.image}
            alt="property display photo"
            fill
            sizes="384px"
            className="object-cover transition-all duration-700 group-hover:scale-110"
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

            <ul className="mt-2 flex items-center justify-between text-xs">
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
                <span>{data.size || 0} ft</span>
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
