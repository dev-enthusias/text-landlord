import { Suspense } from "react";
import SettingsPage from "./_page";

export default function page() {
  return (
    <Suspense>
      <SettingsPage />
    </Suspense>
  );
}
