import PrevPageButton from "@/components/general/prev-page";
import { DownloadIcon, File, MapPin } from "lucide-react";
import ImageSlider from "../../client-component";

export default function OrderDetails() {
  return (
    <>
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:border-none lg:px-0 lg:py-0">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </section>

      <main className="p-3 pb-28">
        <ImageSlider />

        <section className="mb-4 pt-4">
          <p className="text-sm font-semibold text-accent">Apartment</p>
          <h2 className="text-lg font-semibold">Emperica Dazil, Villa</h2>
          <p className="flex items-center gap-x-1 text-[14px]">
            <MapPin size={13} /> Palaxisto Emeriando Plaza Road
          </p>
        </section>

        <section>
          <section className="mb-6">
            <h2 className="border-b-grey border-b pb-1 text-sm font-semibold">
              TRANSACTION DETAILS
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Amount</h3>
                <p className="font-medium opacity-90">50,000,000</p>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="opacity-50">Payment Date</h3>
                <p className="font-medium opacity-90">
                  10th Sep, 2024 - 10:30am
                </p>
              </li>
              <li className="flex items-center justify-between">
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
              </li>
            </ul>
          </section>

          <section>
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
          </section>
        </section>
      </main>
    </>
  );
}
