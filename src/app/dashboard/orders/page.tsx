import PrevPageButton from "@/components/general/prev-page";
import { routes } from "@/constants/routes";
import Link from "next/link";

export default function Orders() {
  return (
    <div>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Orders</h1>
        </div>
      </header>

      <section className="p-3">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">My Orders</h2>
          <p className="opacity-50">You can view all your orders and transaction details here</p>
        </div>

        <div className="space-y-5 py-3">
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </section>
    </div>
  );
}

function OrderCard() {
  return (
    <Link href={routes.DASHBOARDORDERDETAILs} className="block">
      <article className="custom-shadow-sm flex items-center justify-between rounded-lg bg-white p-3">
        <div>
          <h3 className="font-medium">Emperica in Dazil, Villa</h3>
          <p className="mb-1 text-[14px] opacity-80">
            Palaxisto Emeriando Plaza Road
          </p>
          <p className="text-sm opacity-50">10/10/2024 - 01:30PM</p>
        </div>

        <p className="my-2 flex items-center gap-x-1 font-semibold text-primary-dark">
          ₦50,000,000
        </p>
      </article>
    </Link>
  );
}
