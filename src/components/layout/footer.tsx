import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="mt-10 space-y-10 bg-primary-dark/10 pb-20 pt-10 lg:mt-14 lg:space-y-14 lg:pb-0">
      <div className="space-y-10 px-5 lg:space-y-14 lg:px-10 xl:px-20">
        <section className="grid w-full grid-cols-2 flex-wrap justify-between gap-10 lg:grid-cols-3 xl:flex">
          <div>
            <h3 className="mb-2 font-semibold xl:text-lg">Our Services</h3>
            <div className="space-y-1 text-[0.875rem]">
              <p>My Account</p>
              <p>My Account</p>
              <p>My Account</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold xl:text-lg">Company Info</h3>
            <div className="space-y-1 text-[0.875rem]">
              <p>My Account</p>
              <p>My Account</p>
              <p>My Account</p>
            </div>
          </div>

          <div>
            <h3 className="col-span-2 mb-2 font-semibold lg:col-span-1 xl:text-lg">
              Contact Us
            </h3>
            <div className="space-y-1 text-[0.875rem] xl:text-base">
              <p className="flex items-center gap-x-1">
                <Mail className="h-3 w-3" />
                sales@ogalandlords.com
              </p>
              <p className="flex items-center gap-x-1">
                <Phone className="h-3 w-3" />
                +2349080010168
              </p>
              <p className="flex items-center gap-x-1">
                <MapPin className="h-3 w-3" />
                Lagos, city
              </p>
            </div>
            <div className="mt-4 flex w-full gap-x-5 lg:w-fit">
              <Link
                href=""
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href=""
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href=""
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href=""
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="flex gap-x-5">
          <Link href="">
            <Image alt="" src="/google-play.png" width={100} height={50} />
          </Link>
          <Link href="">
            <Image alt="" src="/ap-store.png" width={100} height={50} />
          </Link>
        </section>

        <section className="flex justify-center text-[0.895rem]">
          {/* <p>We accept:</p> */}
          <Image
            src="/logos/america-express.png"
            alt="America express logo"
            width={500}
            height={10}
            className="h-auto w-4/5 lg:w-auto"
          />
        </section>
      </div>

      <section className="mt-10 border-t border-black py-5 text-center text-[0.895rem] lg:mt-14">
        <p>© 2024 Oga LandLords . All Rights Reserved.</p>
      </section>
    </footer>
  );
}
