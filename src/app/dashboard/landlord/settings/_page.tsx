"use client";

import { landlordSettingsLinksDesktop } from "@/constants/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Account from "../account/page";
import PropertyCategories from "../property-category/page";
import PropertyFacilities from "../property-facility-type/page";
import { useSearchParams } from "next/navigation";
import { ChangePasswordForm } from "@/components/forms/chage-password-form";
import ProfilePage from "@/components/pages/profile";
import RentedProperties from "../../tenant/rented-properties/page";
import Wishlist from "../../tenant/wishlist/page";
import OrderDetails from "@/components/pages/order-details";
import Orders from "@/components/pages/order";

export default function SettingsPage() {
  return (
    <>
      {/* <MobileSettingPage /> */}
      <DesktopSettingsPage />
    </>
  );
}

// function Profile() {
//   return (
//     <article className="flex items-center gap-x-2">
//       <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-500">
//         <Image
//           src="/images/profile-img.jpeg"
//           alt="User profile image"
//           fill
//           sizes="64px"
//           style={{ objectFit: "cover" }}
//         />
//       </div>
//       <div>
//         <h3 className="font-bold">Tenant Homme</h3>
//         <p className="text-sm">tenanthomme@gmail.com</p>
//       </div>
//     </article>
//   );
// }

// function MobileSettingPage() {
//   return (
//     <div className="lg:hidden">
//       <header className="sticky top-0 w-full border-b border-gray-200 bg-primary px-3 py-5">
//         <div className="flex flex-col gap-y-4">
//           <PrevPageButton className="-ml-2" />
//           <h1 className="text-xl font-semibold">Settings</h1>
//         </div>

//         <div className="mt-5 flex items-center justify-between">
//           <Profile />
//           <Link href={routes.LANDLORD_DASHBOARD_SETTINGS}>
//             <ChevronRightIcon />
//           </Link>
//         </div>
//       </header>

//       <main className="px-3 pb-24 pt-3">
//         <div className="space-y-4">
//           <section>
//             <h2 className="mb-1 font-semibold">General</h2>
//             <div className="space-y-4 rounded-lg border bg-white p-4">
//               {settings.general.map(({ name, icon, link }, i) => (
//                 <Link
//                   key={i}
//                   href={link}
//                   className="flex items-center justify-between py-1"
//                 >
//                   <div className="flex items-center gap-x-4">
//                     {icon}
//                     {name}
//                   </div>
//                   <ChevronRight />
//                 </Link>
//               ))}
//             </div>
//           </section>

//           <section>
//             <div className="space-y-4 rounded-lg border bg-white p-4">
//               {settings.general2.map(({ name, icon, link }, i) => (
//                 <Link
//                   key={i}
//                   href={link}
//                   className="flex items-center justify-between py-1"
//                 >
//                   <div className="flex items-center gap-x-4">
//                     {icon}
//                     {name}
//                   </div>
//                   <ChevronRight />
//                 </Link>
//               ))}
//             </div>
//           </section>

//           <section>
//             <h2 className="mb-1 font-semibold">Legal</h2>
//             <div className="space-y-4 rounded-lg border bg-white p-4">
//               {settings.legal.map(({ name, icon, link }, i) => (
//                 <Link
//                   key={i}
//                   href={link}
//                   className="flex items-center justify-between py-1"
//                 >
//                   <div className="flex items-center gap-x-4">
//                     {icon}
//                     {name}
//                   </div>
//                   <ChevronRight />
//                 </Link>
//               ))}
//             </div>
//           </section>

//           {/* You would change this when you start integrating endpoints */}

//           {/* <form>
//         <button className="flex gap-x-2 px-1 font-bold text-red-600">
//           <LogOutIcon className="-rotate-180" />
//           Logout
//         </button>
//       </form> */}
//           <Link
//             href={routes.LOGIN}
//             className="flex gap-x-2 px-1 font-bold text-red-600"
//           >
//             <LogOutIcon className="-rotate-180" />
//             Logout
//           </Link>
//         </div>
//       </main>
//       <Menu />
//     </div>
//   );
// }

function DesktopSettingsPage() {
  const searchParam = useSearchParams();
  const activePath = (searchParam.get("path") as string) || "profile";

  return (
    <div className="mb-24 max-h-[calc(100vh-100px)] overflow-hidden">
      {/* <h1 className="border-b px-10 py-5 text-2xl font-semibold">Settings</h1> */}

      <div className="hidden items-start gap-x-10 px-10 py-5 lg:flex">
        <div className="custom-shadow shrink-0 space-y-4 rounded-xl bg-white px-2 py-5">
          <section>
            <div className="space-y-4">
              {landlordSettingsLinksDesktop.map(({ name, icon, link }, i) => (
                <Link
                  key={i}
                  href={link}
                  className="flex items-center justify-between gap-x-10 rounded-lg px-2 py-2 hover:bg-primary-dark/20"
                >
                  <div className="flex items-center gap-x-4">
                    {icon}
                    {name}
                  </div>
                  <ChevronRight />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right Section */}
        <section className="no-scrollbar h-[calc(100vh-64px)] grow overflow-auto">
          <div className="pb-20">
            {activePath === "password" ? (
              <ChangePasswordForm />
            ) : activePath === "profile" ? (
              <ProfilePage role="landlord" />
            ) : activePath === "order" ? (
              <Orders />
            ) : activePath === "properties" ? (
              <RentedProperties />
            ) : activePath === "wishlist" ? (
              <Wishlist />
            ) : activePath === "orderdetails" ? (
              <OrderDetails />
            ) : activePath === "account" ? (
              <Account />
            ) : activePath === "category" ? (
              <PropertyCategories />
            ) : activePath === "facility" ? (
              <PropertyFacilities />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
}