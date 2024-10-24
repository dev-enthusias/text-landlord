import { Suspense } from "react";
import SettingsPage from "./_page";

export default function Settings() {
  return (
    <Suspense>
      <SettingsPage />
    </Suspense>
  );
}
