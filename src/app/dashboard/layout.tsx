import Sidebar from "@/components/general/sidebar";
import Topbar from "@/components/general/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex max-h-dvh min-h-dvh overflow-hidden bg-yellow-50/[15%]">
      <Sidebar />
      <div className="grow overflow-y-auto">
        <div className="hidden lg:block">
          <Topbar />
        </div>
        {children}
      </div>
    </section>
  );
}
