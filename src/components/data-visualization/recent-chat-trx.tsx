import Link from "next/link";
import { FriendCard } from "../layout/chat-sidebar";
import TransactionCard from "../ui/transaction-card";
import { routes } from "@/constants/routes";
import getRole from "@/utils/getRole";

export default async function RecentChatsAndTransactions() {
  const roleid = await getRole();

  const links = {
    chats:
      roleid === 5
        ? routes.TENANT_DASHBOARD_CHAT
        : roleid === 4
          ? routes.LANDLORD_DASHBOARD_CHAT
          : routes.AGENT_DASHBOARD_CHAT,
    trx:
      roleid === 5
        ? routes.TENANT_DASHBOARD_PAYMENT_HISTORY
        : roleid === 4
          ? routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY
          : routes.AGENT_DASHBOARD_TRANSACTION_HISTORY,
  };

  return (
    <div className="grid-cols-12 gap-x-5 lg:grid">
      {/* Recent Chats */}
      <section className="hidden rounded-lg lg:col-span-5 lg:block lg:border lg:bg-white xl:col-span-5">
        <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
          <h2 className="text-lg xl:text-xl">Chats</h2>
          <Link
            href={links.chats}
            className="text-sm text-accent underline lg:text-[14px]"
          >
            View all
          </Link>
        </div>
        <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll px-1">
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="rounded-lg lg:col-span-7 lg:overflow-hidden lg:border lg:bg-white xl:col-span-7">
        <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
          <h2 className="text-lg xl:text-xl">Recent payments</h2>
          <Link
            href={links.trx}
            className="text-sm text-accent underline lg:text-[14px]"
          >
            View all
          </Link>
        </div>
        <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll lg:px-5">
          <TransactionCard status="credit" />
          <TransactionCard status="credit" />
          <TransactionCard status="debit" />
        </div>
      </section>
    </div>
  );
}
