import { getRole, getToken } from "@/lib/actions";
import Home from "./_page";

export default async function LandingPage() {
  const token = await getToken();
  const role = await getRole();

  return <Home token={token} role={role} />;
}
