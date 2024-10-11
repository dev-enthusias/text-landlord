// "use client";

// // import { NotificationCard } from "@/app/dashboard/notifications/page";
// import { LucideBellRing } from "lucide-react";
// import { useState } from "react";

// export default function NotificationBtn() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button className="hidden lg:block" onClick={() => setIsOpen(!isOpen)}>
//         <LucideBellRing />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 top-20 z-[1000000000] w-[420px]">
//           <section className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
//             <div className="flex gap-x-4">
//               <h1 className="text-xl font-semibold">Notifications</h1>
//             </div>
//             <button className="text-[14px] font-semibold text-accent">
//               Mark all as read
//             </button>
//           </section>
//           <section>
//             <div>
//               {/* <NotificationCard />
//               <NotificationCard />
//               <NotificationCard status="read" />
//               <NotificationCard status="read" /> */}
//             </div>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// }
