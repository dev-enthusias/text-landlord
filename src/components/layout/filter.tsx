"use client";

import { useForm, Controller } from "react-hook-form";
import CustomCheckbox from "../ui/custome-checkbox";
import {
  AdvertisedPropertiesRDT,
  PropertySearchFieldsRDT,
} from "@/definitions/tenant";
import {
  filterAdvertisedProperties,
  getAllAdvertisedProperties,
} from "@/api/services/property";
import { X } from "lucide-react";
import LoadingSpinner from "../ui/loading-spinner";

export default function Filter({
  searchFieldsData,
  setData,
  setFilterModal,
}: {
  searchFieldsData: PropertySearchFieldsRDT;
  setData: React.Dispatch<
    React.SetStateAction<AdvertisedPropertiesRDT["data"]>
  >;
  setFilterModal?: (bool: boolean) => void;
}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: isSubmitting,
  } = useForm({
    defaultValues: {
      categories: [] as string[],
      types: [] as string[],
      beds: [] as string[],
      baths: [] as string[],
      sqfts: [] as string[],
      price: "" as string,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      if (data.baths || data.beds) {
        data.baths = data.baths.map((item: string) => parseInt(item));
        data.beds = data.beds.map((item: string) => parseInt(item));
      }
      const result = await filterAdvertisedProperties(data);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const handleReset = async () => {
    reset(); // Clear the form inputs
    try {
      const result = await getAllAdvertisedProperties({
        types: ["Commercial", "Residential", "Industrial", "Land"],
      });
      setData(result.data); // Refetch and set the full list of properties
    } catch (error) {
      console.error("Error refetching all properties:", error);
    }
  };

  return (
    <div className="rounded-lg bg-white p-3">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-black">Filters</h2>
        <div className="flex items-center gap-x-2">
          <button onClick={handleReset}>
            <span className="text-xs underline">Reset Filters</span>
          </button>
          <button
            className="rounded bg-gray-200 p-1 lg:hidden"
            onClick={() => setFilterModal && setFilterModal(false)}
          >
            <X size={20} />
          </button>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">
            Property Types
          </h3>
          <ul className="grid grid-cols-2 gap-y-2 text-gray-600 lg:grid-cols-1">
            {searchFieldsData.data.types.map((t) => (
              <li key={t.id} className="text-xs tracking-wide">
                <Controller
                  name="types"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      id={`type-${t.id}`}
                      checked={field.value.includes(t.name)}
                      label={t.name}
                      onChange={() =>
                        field.onChange(
                          field.value.includes(t.name)
                            ? field.value.filter((item) => item !== t.name)
                            : [...field.value, t.name],
                        )
                      }
                    />
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">
            Property Categories
          </h3>
          <ul className="grid grid-cols-2 gap-y-2 text-gray-600 lg:grid-cols-1">
            {searchFieldsData.data.categories.map((c) => (
              <li key={c.id} className="text-xs tracking-wide">
                <Controller
                  name="categories"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      id={`category-${c.id}`}
                      checked={field.value.includes(c.name)}
                      label={c.name}
                      onChange={() =>
                        field.onChange(
                          field.value.includes(c.name)
                            ? field.value.filter((item) => item !== c.name)
                            : [...field.value, c.name],
                        )
                      }
                    />
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">Bedrooms</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-gray-600 lg:grid-cols-1">
            {searchFieldsData.data.beds.map((b) => (
              <li key={b} className="text-xs tracking-wide">
                <Controller
                  name="beds"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      id={`bed-${b}`}
                      checked={field.value.includes(b)}
                      label={`${b} Beds`}
                      onChange={() =>
                        field.onChange(
                          field.value.includes(b)
                            ? field.value.filter((item) => item !== b)
                            : [...field.value, b],
                        )
                      }
                    />
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">Bathrooms</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-gray-600 lg:grid-cols-1">
            {searchFieldsData.data.baths.map((b) => (
              <li key={b} className="text-xs tracking-wide">
                <Controller
                  name="baths"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      id={`bath-${b}`}
                      checked={field.value.includes(b)}
                      label={`${b} Baths`}
                      onChange={() =>
                        field.onChange(
                          field.value.includes(b)
                            ? field.value.filter((item) => item !== b)
                            : [...field.value, b],
                        )
                      }
                    />
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">
            Size (sq ft)
          </h3>
          <ul className="grid grid-cols-2 gap-y-2 text-gray-600 lg:grid-cols-1">
            {searchFieldsData.data.sqfts.map((s) => (
              <li key={s} className="text-xs tracking-wide">
                <Controller
                  name="sqfts"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      id={`sqft-${s}`}
                      checked={field.value.includes(s)}
                      label={`${s} sq ft`}
                      onChange={() =>
                        field.onChange(
                          field.value.includes(s)
                            ? field.value.filter((item) => item !== s)
                            : [...field.value, s],
                        )
                      }
                    />
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Might visit it later */}
        <section className="hidden">
          <h3 className="mb-2 text-sm font-medium text-gray-700">Max. Price</h3>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600"
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </section>

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-bold text-white"
        >
          {isSubmitting.isSubmitting ? (
            <LoadingSpinner className="border-2 border-white border-t-transparent" />
          ) : (
            "Apply Filter"
          )}
        </button>
      </form>
    </div>
  );
}
