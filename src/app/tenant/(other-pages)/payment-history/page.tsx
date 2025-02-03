import { Suspense } from "react";
import { routes } from "@/constants/routes";
import PaymentHistoryPage from "@/components/pages/trx-history";

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

export default function PaymentHistory() {
  return (
    <Suspense>
      <PaymentHistoryPage btns={buttons} />
    </Suspense>
  );
}
