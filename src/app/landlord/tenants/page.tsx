import AddTenantBtn from "@/components/ui/add-tenant-btn";
import TenantList, {
  TenantListMobile,
} from "@/components/data-visualization/tenant-list";
import { CiSearch } from "react-icons/ci";
import { getTenants } from "@/api/services/tenant";
import Image from "next/image";

export default async function Tenants() {
  const tenants = await getTenants();

  if (typeof tenants === "string")
    return (
      <div className="flex h-full w-full flex-col items-center justify-center py-10">
        <h1 className="text-2xl font-semibold">Something went wrong!</h1>
        <p>Check your internet connection and try again</p>
      </div>
    );

  if (!tenants) return null;

  const totalTenants = tenants.list?.length;

  return (
    <main className="mb-20 pt-7 lg:gap-x-8 min-[1140px]:px-10 xl:gap-x-10">
      <div className="grow overflow-y-auto">
        <section className="mb-6 px-5 lg:px-3">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-semibold text-black">Tenants</h1>
              <AddTenantBtn />
            </div>
          </div>
        </section>

        <section className="hidden rounded-2xl bg-white p-5 lg:block">
          <div className="mb-3 flex items-end justify-between">
            <p className="text-sm font-semibold">
              Total {totalTenants} tenants
            </p>

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

            {totalTenants <= 0 ? (
              <div className="flex flex-col items-center justify-center gap-y-2 pb-8 pt-4 text-center">
                <Image
                  src="/illustrations/undraw_add-tenants.svg"
                  alt="no properties illustration"
                  width={200}
                  height={100}
                />
                <div className="text-center text-black">
                  <p>Oops! It seems like there is nobody here yet.</p>
                  <p>
                    Never mind, just list your property/properties and wait for
                    tenants to find you.
                  </p>
                </div>
              </div>
            ) : (
              tenants.list.map((tenant) => (
                <TenantList
                  key={tenant.id}
                  status="overdue"
                  tenant_status="active"
                  data={tenant}
                />
              ))
            )}
          </div>
        </section>

        <section className="px-5 lg:hidden">
          <div className="relative mb-3 w-full lg:max-w-[240px] xl:max-w-[440px] xl:gap-x-20">
            <CiSearch
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
            />
            <input
              type="search"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-sm text-black placeholder:text-black hover:border-b-gold focus:border-b-2 focus:outline-none"
              placeholder="Search for tenants..."
            />
          </div>

          <div className="-mx-5 space-y-5">
            <div className="mb-3 flex items-center justify-between border-y border-gray-300 bg-white px-5 py-3">
              <p>Total tenants {totalTenants}</p>
              <p>
                {totalTenants > 0
                  ? `1-${totalTenants} of ${totalTenants} results`
                  : "No results"}
              </p>
            </div>

            {totalTenants <= 0 ? (
              <div className="flex flex-col items-center justify-center gap-y-2 pt-4 text-center">
                <Image
                  src="/illustrations/undraw_add-tenants.svg"
                  alt="no properties illustration"
                  width={150}
                  height={100}
                />
                <div>
                  <p className="text-center text-black">
                    Oops! It seems like there is nobody here yet.
                  </p>
                </div>
              </div>
            ) : (
              tenants.list.map((tenant) => (
                <TenantListMobile
                  key={tenant.id}
                  status="overdue"
                  tenant_status="active"
                  data={tenant}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
