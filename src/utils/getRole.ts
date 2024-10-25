"use server";

import { cookies } from "next/headers";

export default async function getRole() {
  const cookiesStore = cookies();
  const role = cookiesStore.get("role");

  let roleid;

  if (role) {
    roleid = parseInt(role.value);
    return roleid;
  }
  
  roleid = undefined;

  return roleid;
}
