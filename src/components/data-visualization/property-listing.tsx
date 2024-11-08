import { TenantPropertyCard } from "../ui/property-card";

export default function PropertyListing() {
  return (
    <section>
      <div className="mb-6">
        <p className="font-semibold text-black">Showing 577 search results</p>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
        <TenantPropertyCard />
      </div>
    </section>
  );
}
