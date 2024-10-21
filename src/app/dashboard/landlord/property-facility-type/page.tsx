import Topbar from "@/components/general/topbar";
import Menu from "@/components/general/footer-menu";
import { Trash2 } from "lucide-react";
import AddPropertyFacilityBtn from "../modals/add-facility";

export default function PropertyFacilities() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 mb-10 px-3">
          <div className="mb-4 flex flex-col items-center justify-between gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
              Facilities
            </h1>

            <AddPropertyFacilityBtn />
          </div>
        </section>

        <section className="grid grid-cols-2 justify-between gap-6 px-3">
          <AccountListCard />
          <AccountListCard />
          <AccountListCard />
          <AccountListCard />
        </section>
      </main>

      <Menu />
    </>
  );
}

function AccountListCard() {
  return (
    <article className="custom-shadow rounded-lg bg-white p-4 text-[14px]">
      <h3 className="text-lg font-medium">Electricity</h3>

      <div className="flex justify-between">
        <p className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-sm text-white">
          Active
        </p>

        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
          <Trash2 size={14} />
        </button>
      </div>
    </article>
  );
}
