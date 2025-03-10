import { Suspense } from "react";
import { routes } from "@/constants/routes";
import PaymentHistoryPage from "@/components/pages/trx-history";
import { getTrx } from "@/api/services/transaction";

const buttons = [
  { text: "All", link: routes.PAYMENT_HISTORY, type: "all" },
  {
    text: "Credit",
    link: routes.PAYMENT_HISTORY + "?trx-type=credit",
    type: "credit",
  },
  {
    text: "Debits",
    link: routes.PAYMENT_HISTORY + "?trx-type=debit",
    type: "debit",
  },
];

export default async function PaymentHistory() {
  const trx = await getTrx();

  return (
    <Suspense>
      <PaymentHistoryPage btns={buttons} trx={trx} />
    </Suspense>
  );
}
