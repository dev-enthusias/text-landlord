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
    <footer className="bg-primary-dark/50 px-5 pt-10 lg:px-10">
      <section className="flex w-full justify-between gap-x-10">
        <div>
          <h3 className="mb-2 font-semibold xl:text-lg">Our Services</h3>
          <div className="space-y-1 text-[0.875rem]">
            <p>My Account</p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold xl:text-lg">Company Info</h3>
        </div>
        <div>
          <h3 className="mb-2 font-semibold xl:text-lg">Contact Us</h3>
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
          <div className="mt-4 flex gap-x-5">
            <Link
              href=""
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href=""
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href=""
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href=""
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-5 flex gap-x-5">
        <Link href="">
          <Image alt="" src="/google-play.png" width={100} height={50} />
        </Link>
        <Link href="">
          <Image alt="" src="/ap-store.png" width={100} height={50} />
        </Link>
      </section>
      <section className="mt-5 flex justify-center text-[0.895rem]">
        <p>We accept:</p>
      </section>
      <section className="-mx-5 mt-5 border-t border-black py-5 text-center text-[0.895rem] lg:-mx-10">
        <p>© 2024 Oga LandLords . All Rights Reserved.</p>
      </section>
    </footer>
  );
}
