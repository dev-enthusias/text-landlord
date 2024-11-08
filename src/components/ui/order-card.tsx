import Link from "next/link";
import { routes } from "@/constants/routes";
import { getRole } from "@/lib/actions";

export default async function OrderCard() {
  const roleid = await getRole();

  // const href =
  //   roleid === 4
  //     ? routes.LANDLORD_DASHBOARD_SETTINGS + `?path='orderdetails`
  //     : roleid === 5
  //       ? routes.TENANT_DASHBOARD_SETTINGS + `?path='orderdetails`
  //       : routes.AGENT_DASHBOARD_SETTINGS + "?path=orderdetails";

  return (
    <Link href={""} className="block">
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
