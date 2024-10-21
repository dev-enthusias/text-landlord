import { Suspense } from "react";
import PropertyDetails from "./_page";

export default function PropertyDetailsPage() {
  return (
    <Suspense>
      <PropertyDetails />
    </Suspense>
  );
}
