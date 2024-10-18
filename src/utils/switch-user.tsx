"use client";

import { useRouter } from "next/navigation";
import { getRole, setRole } from "./role";

export const SwitchUserRole = () => {
  const router = useRouter();
  const role = getRole();

  const switchRole = () => {
    if (role === "tenant") {
      setRole("landlord");
    } else {
      setRole("tenant");
    }

    router.push("/login");
  };

  return (
    <button
      onClick={switchRole}
      className="rounded-lg bg-black px-4 py-2 text-white"
    >
      Switch to {role === "tenant" ? "Landlord" : "Tenant"}
    </button>
  );
};
