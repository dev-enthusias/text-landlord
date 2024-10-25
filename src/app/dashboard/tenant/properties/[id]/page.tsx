import { Suspense } from "react";
import PropertyDetailsPage from "./_page";

export default function TenantPropertyListingDetail() {
  return (
    <Suspense>
      <PropertyDetailsPage />
    </Suspense>
  );
}
