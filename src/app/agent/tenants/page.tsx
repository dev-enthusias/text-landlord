
import AddTenantBtn from "@/components/ui/add-tenant-btn";
import TenantList from "@/components/data-visualization/tenant-list";

export default function Tenants() {
  return (
    <main className="mb-20 px-10 pt-7 lg:gap-x-8 xl:gap-x-10">
      <div className="grow overflow-y-auto">
        <section className="mb-6 px-3">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-semibold text-black">Tenants</h1>
              <AddTenantBtn />
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5">
          <div className="mb-3 flex items-end justify-between">
            <p className="text-sm font-semibold">Total 20 tenants</p>

            <div className="w-full lg:max-w-[240px] xl:max-w-[440px] xl:gap-x-20">
              <input
                type="search"
                className="w-full rounded-lg border-b-gold bg-gray-100 px-4 py-3 text-sm text-black placeholder:text-black focus:border-b-2 focus:outline-none"
                placeholder="Search for tenants..."
              />
            </div>
          </div>

          <div
            role="grid"
            aria-label="Tenants Overview"
            className="space-y-3 rounded-xl border border-gray-200"
          >
            <div
              role="row"
              className="grid grid-cols-10 items-center gap-x-3 rounded-t-xl bg-gray-100 px-5 py-5 text-sm font-semibold"
            >
              <h3 role="columnheader" className="col-span-2 text-left">
                Tenant
              </h3>
              <h3 role="columnheader" className="col-span-2 text-left">
                Property
              </h3>
              <h3 role="columnheader">Start Date</h3>
              <h3 role="columnheader">Due Date</h3>
              <h3 role="columnheader">Rent Amount</h3>
              <h3 role="columnheader">Rent Status</h3>
              <h3 role="columnheader">Tenant Status</h3>
              <h3 role="columnheader">Action</h3>
            </div>

            <TenantList status="overdue" tenant_status="active" />
            <TenantList status="current" />
            <TenantList status="overdue" tenant_status="active" />
            <TenantList status="current" tenant_status="active" />
            <TenantList status="current" />
            <TenantList status="upcoming" tenant_status="active" />
            <TenantList status="current" tenant_status="active" />
            <TenantList status="upcoming" tenant_status="active" />
          </div>
        </section>
      </div>
      {/* <TenantDetails /> */}
    </main>
  );
}

// function TenantDetails() {
//   return (
//     <div className="no-scrollbar max-h-[calc(100vh-80px)] shrink-0 overflow-hidden overflow-y-auto rounded-lg bg-gold/10 p-5 lg:w-[440px]">
//       <section className="flex items-center gap-x-4">
//         <div className="relative h-20 w-20 overflow-hidden rounded">
//           <Image
//             src="/images/profile-img.jpeg"
//             fill
//             alt="Property image"
//             className="object-cover"
//           />
//         </div>
//         <div>
//           <h1 className="font-semibold text-gray-800">Anotion Markiwa</h1>
//           <p className="text-sm">broski@ogalandlords.com</p>
//           <p className="text-sm">09080010168</p>
//         </div>
//       </section>

//       <section className="my-2 flex items-center gap-x-6">
//         <EditTenantBtn />
//         <button className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm font-semibold text-gold">
//           <BsChat size={14} />
//           Chat
//         </button>
//         <button className="rounded bg-red-600 px-6 py-2 text-sm font-bold text-white">
//           Delete
//         </button>
//       </section>

//       <section className="mt-6">
//         <h2 className="mb-2 font-semibold text-black">Occupied properties</h2>
//         <div className="space-y-2">
//           <OccupiedPropertyAccordion />
//           <OccupiedPropertyAccordion />
//           <OccupiedPropertyAccordion />
//         </div>
//       </section>
//     </div>
//   );
// }
