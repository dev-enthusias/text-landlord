import AddTenantBtn from "@/components/ui/add-tenant-btn";
import TenantList, {
  TenantListMobile,
} from "@/components/data-visualization/tenant-list";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Tenants() {
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
              <p>Total tenants 20</p>
              <p>11-14 of 20 results</p>
            </div>

            <div className="grid gap-5 sm:px-5 md:grid-cols-2">
              <TenantListMobile status="overdue" tenant_status="active" />
              <TenantListMobile status="upcoming" tenant_status="active" />
              <TenantListMobile status="current" tenant_status="inactive" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
