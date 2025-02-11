import { PropertyCard } from "@/components/ui/property-card";
import { howItWorks } from "@/constants/data";
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
      <PropertyCategories />
      <TrendingProperties />
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

const Header = () => {
  return (
    <header className="relative mb-[6.25rem] min-h-[90vh] bg-black/40 bg-[url('/images/home-bg.jpg')] bg-cover bg-center bg-blend-overlay">
      <nav className="flex h-16 items-center justify-between bg-white/20 px-[6.25rem] backdrop-blur-lg backdrop-filter lg:h-20">
        <img
          src="/logos/logo-transparent.png"
          alt=""
          className="mt-3.5 h-28 w-28"
        />

        <Link
          href="./login"
          className="hidden rounded-full bg-gold px-6 py-3 font-semibold text-white lg:block"
        >
          Login
        </Link>
      </nav>

      <section className="absolute top-1/2 w-full -translate-y-1/2 px-5 text-center">
        <h1 className="font-lato text-[60px] font-bold leading-[60px] text-white">
          Find Your Perfect{" "}
          <span className="font-cormorant italic text-yellow-500">Home</span>{" "}
          <span className="block">
            in <span className="text font-cormorant italic">Minutes.</span>
          </span>
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
          Discover Our Property Categories
        </h2>
        <p className="max-w-[440px] text-sm">
          Find your perfect apartment among our extensive collection of
          properties. We offer a wide range of options to suit your needs, from
          cozy studios to spacious multi-bedroom apartments.
        </p>
      </div>
      div
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
        <PropertyCard data={{ id: 1, slug: "" }} />
        <PropertyCard data={{ id: 1, slug: "" }} />
        <PropertyCard data={{ id: 1, slug: "" }} />
        <PropertyCard data={{ id: 1, slug: "" }} />
      </div>
    </section>
  );
};

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
      <p className="font-open-sans mb-4 text-xl leading-7 text-black/80">
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

// "I had a few questions during the process, and the Finpro support team was incredibly helpful. They were responsive, friendly, and went above and beyond to assist me. I'm very satisfied with my experience."

// "I was impressed by the wide range of property options available on Finpro. I found exactly the type of apartment I was looking for, in the neighborhood I wanted, and at a price that fit my budget. Thank you, Finpro!"
