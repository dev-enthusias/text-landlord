import { getOrderDetails, getOrders } from "@/api/services/order";
import PrevPageButton from "@/components/ui/prev-page";
import { OrderDetailsDataType, OrdersDataType } from "@/definition";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default async function OrderDetails({
  params,
}: {
  params: { id: string };
}) {
  const orders = (await getOrders()) as OrdersDataType;

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
    <>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">
            {orderDetails2?.data.list[0].property?.name ?? "No Property Name"}
          </h1>
        </div>
      </header>

      <main className="px-10 py-7">
        <section className="mb-4 flex items-center gap-x-3">
          <div className="custom-shadow relative h-[100px] w-[100px] overflow-hidden rounded-lg">
            <Image
              src={orderDetails2?.data.list[0].property.image as string}
              alt="display photo of property"
              fill
              sizes="200px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-accent">Apartment</p>
            <h2 className="text-lg font-semibold">
              {orderDetails2?.data.list[0].property?.name ?? "No Property Name"}
            </h2>
            <p className="flex items-center gap-x-1 text-[14px]">
              <MapPin size={13} /> Palaxisto Emeriando Plaza Road
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <section>
            <h2 className="border-b-grey border-b pb-1 text-sm font-semibold">
              TRANSACTION DETAILS
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Transaction No.</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.invoice_no ?? "N/A"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Payment Method</h3>
                <p className="font-semibold text-gray-800">Paystack</p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Payment Date</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.date ?? "N/A"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Due Payment</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.due_amount ?? "N/A"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Amount Paid</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.paid_amount ?? "N/A"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Payment Status</h3>
                <p
                  className={`font-semibold capitalize text-gray-800 ${orderDetails2?.data.list[0].payment_status.toLowerCase() === "unpaid" ? "text-red-600" : "text-green-600"}`}
                >
                  {orderDetails2?.data.list[0].payment_status}
                </p>
              </li>
              {/* <li className="flex items-center justify-between">
                <h3 className="opacity-50">Property Owner</h3>
                <p className="font-medium opacity-90">Stephenie Hawkins</p>
              </li> 
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Renewal Due</h3>
                <p className="font-medium opacity-90">10th Sep, 2025</p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Grace Period</h3>
                <p className="font-medium opacity-90">1 month</p>
              </li>*/}
            </ul>
          </section>

          {/* <section>
            <h2 className="border-b-grey borde-b mb-2 pb-1 text-sm font-semibold">
              DOCUMENTS
            </h2>

            <div className="custom-shadow-sm flex items-center justify-between rounded-lg bg-white px-3 py-4">
              <div className="flex items-center gap-x-4">
                <File />
                <span className="font-semibold">File1.pdf</span>
              </div>
              <DownloadIcon />
            </div>
          </section> */}
        </section>
      </main>
    </>
  );
}
