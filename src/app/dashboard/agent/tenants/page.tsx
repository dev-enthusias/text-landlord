import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import AddTenantBtn from "@/components/ui/add-tenant-btn";
import TenantCard from "@/components/ui/tenant-card";

export default function Tenants() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 px-3 lg:px-10">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
                Tenants
              </h1>

              <AddTenantBtn />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex flex-col items-center rounded-lg bg-black py-4 text-background">
              <span className="text-xl font-bold">4</span>
              <h3 className="mt-2 font-semibold opacity-80">Total</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-primary-dark py-4 text-black">
              <span className="text-xl font-bold">10</span>
              <h3 className="mt-2 font-semibold opacity-80">Active</h3>
            </div>
            <div className="custom-shadow flex flex-col items-center rounded-lg bg-white py-4 text-foreground">
              <span className="text-xl font-bold">2</span>
              <h3 className="mt-2 font-semibold opacity-80">Inactive</h3>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 justify-between gap-5 px-3 md:grid-cols-3 lg:grid-cols-3 lg:p-10 xl:grid-cols-4">
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
        </section>
      </main>

      <Menu />
    </>
  );
}
