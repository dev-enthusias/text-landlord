"use client";

import PrevPageButton from "@/components/ui/prev-page";
import Image from "next/image";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ClientPageOrderDetails({
  orderDetails,
  orderDetails2,
  tenantName,
}: {
  orderDetails: any;
  orderDetails2: any;
  tenantName: string;
}) {
  const receiptRef = useRef<HTMLDivElement>(null);

  const generateReceipt = async () => {
    if (!receiptRef.current) return;

    // Convert the receipt UI to a canvas
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL("image/png");

    // Create a PDF from the canvas
    const pdf = new jsPDF();
    const imgWidth = 190; // Adjust as needed
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    // Save or share the PDF
    if (navigator.share) {
      const blob = pdf.output("blob");
      const file = new File([blob], "receipt.pdf", { type: "application/pdf" });
      navigator.share({
        files: [file],
        title: "Receipt",
        text: "Here is your receipt.",
      });
    } else {
      pdf.save("receipt.pdf");
    }
  };

  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-lg font-semibold text-black lg:text-xl">
            {orderDetails2?.data.list[0].property?.name + " order details"}
          </h1>
        </div>
      </header>

      <main className="px-5 py-7">
        <section className="mb-10 flex flex-col items-center gap-x-3 lg:mb-5 lg:flex-row">
          <div className="custom-shadow relative h-12 w-12 overflow-hidden rounded-full lg:h-[100px] lg:w-[100px] lg:rounded-lg">
            <Image
              src={orderDetails2?.data.list[0].property.image as string}
              alt="display photo of property"
              fill
              sizes="200px"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-black">
              {orderDetails2?.data.list[0].property?.name ?? "No Property Name"}{" "}
              <span className="ml-2 rounded bg-accent px-1 py-[2px] text-xs text-white">
                Rent
              </span>
            </h2>
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
                <h3 className="opacity-50">Transaction Date</h3>
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
                <h3 className="opacity-50">Refundable Caution Fee</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.caution_fee ?? "N/A"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Grace Period</h3>
                <p className="font-semibold text-gray-800">
                  {orderDetails?.grace_period + " week(s)"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Payment Status</h3>
                <p
                  className={`font-semibold capitalize text-gray-800 ${
                    orderDetails2?.data.list[0].payment_status.toLowerCase() ===
                    "unpaid"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {orderDetails2?.data.list[0].payment_status}
                </p>
              </li>
              <li className="flex justify-center">
                <button
                  onClick={generateReceipt}
                  className="mt-4 w-full max-w-[380px] rounded-full bg-black py-3 font-semibold text-white"
                >
                  Generate Receipt
                </button>
              </li>
            </ul>
          </section>

          <div
            ref={receiptRef}
            className="h-w-full brder-black absolute -left-[10000px] -top-[10000px] w-full max-w-[570px] bg-white py-6"
          >
            <section className="p-7">
              <div className="mb-4 flex h-11 items-center justify-between overflow-hidden text-sm font-semibold text-black">
                <img
                  src="/logos/logo-transparent.png"
                  width={90}
                  height={40}
                  alt=""
                  className="mt-5"
                />
                <h1>Transaction Receipt</h1>
              </div>

              <div className="mb-2 flex flex-col items-center justify-center gap-y-1 border-b-2 pb-2">
                <p className="text-2xl font-bold text-accent">
                  {orderDetails?.paid_amount}
                </p>
                <div className="text-center text-sm">
                  <p className="font-bold text-black">
                    {orderDetails2?.data.list[0].payment_status ?? "N/A"}
                  </p>
                  <p>{orderDetails?.date}</p>
                </div>
              </div>

              <div className="mb-4 grid gap-y-1 text-sm lg:text-base">
                <p className="flex justify-between">
                  Property
                  <span className="text-black">
                    {orderDetails2?.data.list[0].property?.name}
                  </span>
                </p>
                <p className="flex justify-between">
                  Transaction No{" "}
                  <span className="text-black">{orderDetails?.invoice_no}</span>
                </p>
                <p className="flex justify-between">
                  Tenant Details
                  <span className="text-black">{tenantName}</span>
                </p>
                <p className="flex justify-between">
                  Payment Method <span className="text-black">Paystack</span>
                </p>
                <p className="flex justify-between">
                  Due Payment{" "}
                  <span className="text-black">{orderDetails?.due_amount}</span>
                </p>
                <p className="flex justify-between">
                  Amount Paid{" "}
                  <span className="text-black">
                    {orderDetails?.paid_amount}
                  </span>
                </p>
                <p className="flex justify-between">
                  Refundable Caution Fee{" "}
                  <span className="text-black">
                    {orderDetails?.caution_fee}
                  </span>
                </p>
                <p className="flex justify-between">
                  Rent Grace Period:{" "}
                  <span className="text-black">
                    {orderDetails?.grace_period} week(s)
                  </span>
                </p>
              </div>

              <div className="border-b border-dashed border-black pb-2 text-center text-sm">
                <h2>Support</h2>
                <p className="text-accent">support@ogalandlords.com</p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
