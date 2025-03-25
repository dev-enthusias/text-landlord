import { getOrderDetails, getOrders } from "@/api/services/order";
import { OrderDetailsDataType, OrdersDataType } from "@/definition";
import ClientPageOrderDetails from "./client-page";
import { getProfileDetails } from "@/api/services/profile";

export default async function OrderDetails({
  params,
}: {
  params: { id: string };
}) {
  const orders = (await getOrders()) as OrdersDataType;
  const profile = await getProfileDetails();

  const allOrderDetails = await Promise.all(
    orders.data.list.map(async (order) => {
      return (await getOrderDetails(order.id)) as OrderDetailsDataType;
    }),
  );

  const orderId = parseInt(params.id, 10);
  const orderDetails = orders.data.list.find((order) => order.id === orderId);
  const orderDetails2 = allOrderDetails.find(
    (order) =>
      order.data.list.length > 0 && order.data.list[0].order_id === orderId,
  );

  return (
    <ClientPageOrderDetails
      orderDetails={orderDetails}
      orderDetails2={orderDetails2}
      tenantName={profile.profile_info.name}
    />
  );
}
