"use client";

import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import { landloardQuickActionData } from "@/constants/data";
import { ImagesIcon, X } from "lucide-react";
import { useState } from "react";
import ModalLayout from "./modal-layout";
import { useRouter } from "next/navigation";

export default function LandLordQuickActions() {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("");
  const [isAddPropertyModalOpen, setAddPropertyModal] = useState(false);
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);
  const [isAddAgentModalOpen, setAddAgentModal] = useState(false);
  const [step, nextStep] = useState(0);

  const handleQuickAction = (index: number) => {
    switch (index) {
      case 0:
        setAddPropertyModal(true);
        break;
      case 1:
        router.push("/dashboard/tenants");
        break;
      case 2:
        setAddTenantModal(true);
        break;
      case 3:
        router.push("/dashboard/reports");
        break;
      case 4:
        setAddAgentModal(true);
        break;
      case 5:
        router.push("/dashboard/bills");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 justify-between gap-4 text-sm md:grid-cols-6 lg:text-base">
        {landloardQuickActionData.map((data, i) => (
          <article
            key={i}
            className="custom-shadow flex w-full shrink-0 flex-col items-center justify-center gap-y-3 rounded-lg bg-white py-5 hover:cursor-pointer"
            onClick={() => handleQuickAction(i)}
          >
            {data.icons}
            <h3 className="font-semibold">{data.title}</h3>
          </article>
        ))}
      </div>

      {isAddPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Property</h3>
              <button className="" onClick={() => setAddPropertyModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              {step === 0 && (
                <fieldset className="space-y-4">
                  <TextInput label="Property Name" />
                  <SelectInput
                    label="Property Type"
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="Choose an option"
                  />
                  <SelectInput
                    label="Property Category"
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="Choose an option"
                  />
                  <TextInput label="Property Address" />
                  <SelectInput
                    label="Location"
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="Country"
                  />
                  <SelectInput
                    label=""
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="State"
                  />
                  <SelectInput
                    label=""
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="City"
                  />
                  <div className="flex flex-col gap-y-1">
                    <p className="mb-1 block font-semibold text-gray-600">
                      Image
                    </p>
                    <label
                      htmlFor="image"
                      className="relative flex h-20 w-full cursor-pointer items-center justify-center gap-x-1 rounded-md border border-dashed border-gray-300 bg-white py-3 pl-4 pr-10 text-left text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <input
                        type="file"
                        id="image"
                        className="hidden"
                        multiple
                      />
                      <ImagesIcon size={16} />
                      Select property images
                    </label>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
                    onClick={() => nextStep(1)}
                  >
                    Next
                  </button>{" "}
                </fieldset>
              )}

              {step === 1 && (
                <fieldset className="space-y-4">
                  <TextInput label="Rent per Annum" />
                  <SelectInput
                    label="Rent Grace Period"
                    options={[{ value: "land", label: "Land" }]}
                    value={propertyType}
                    onChange={setPropertyType}
                    placeholder="Choose an option"
                  />
                  <TextInput label="Caution Fee" />
                  <TextInput label="Size of Property (sq ft)" />
                  <TextInput label="Bathroom" />
                  <TextInput label="Bedrooms" />
                  <TextInput label="Toilets" />
                  <TextInput label="Rent Price" />
                  <div>
                    <label
                      htmlFor=""
                      className="block font-semibold text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      name=""
                      id=""
                      className="relative h-20 w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
                    onClick={() => nextStep(1)}
                  >
                    Save
                  </button>
                </fieldset>
              )}
            </main>
          </article>
        </ModalLayout>
      )}

      {isAddTenantModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Tenant</h3>
              <button className="" onClick={() => setAddTenantModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <fieldset className="space-y-4">
                <TextInput label="First Name" />
                <TextInput label="Last Name" />
                <TextInput label="Email" />
                <TextInput label="Phone" />
                <TextInput label="Occupation" />
                <SelectInput
                  label="Location"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="Country"
                />
                <SelectInput
                  label=""
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="State"
                />
                <SelectInput
                  label=""
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="City"
                />
                <TextInput label="Address" />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
                >
                  Save
                </button>
              </fieldset>
            </main>
          </article>
        </ModalLayout>
      )}

      {isAddAgentModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Assign Agent</h3>
              <button className="" onClick={() => setAddAgentModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <fieldset className="space-y-4">
                <SelectInput
                  label="Properties"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="State"
                />
                <SelectInput
                  label="Agents"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="City"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
                >
                  Assign
                </button>
              </fieldset>
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
