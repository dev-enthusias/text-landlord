import { routes } from "@/constants/routes";
import PaymentHistoryPage from "@/components/pages/trx-history";

const buttons = [
  { text: "All", link: routes.TENANT_DASHBOARD_PAYMENT_HISTORY, type: "all" },
  {
    text: "Credit",
    link: routes.TENANT_DASHBOARD_PAYMENT_HISTORY + "?trx-type=credit",
    type: "credit",
  },
  {
    text: "Debit",
    link: routes.TENANT_DASHBOARD_PAYMENT_HISTORY + "?trx-type=debit",
    type: "debit",
  },
];

export default function PaymentHistory() {
  return <PaymentHistoryPage btns={buttons} />;
}
