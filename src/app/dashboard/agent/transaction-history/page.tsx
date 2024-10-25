import PaymentHistoryPage from "@/components/pages/trx-history";
import { routes } from "@/constants/routes";

const buttons = [
  {
    text: "All",
    link: routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY,
    type: "all",
  },
  {
    text: "Credit",
    link: routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY + "?trx-type=credit",
    type: "credit",
  },
  {
    text: "Debit",
    link: routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY + "?trx-type=debit",
    type: "debit",
  },
];

export default function PaymentHistory() {
  return <PaymentHistoryPage btns={buttons} />;
}
