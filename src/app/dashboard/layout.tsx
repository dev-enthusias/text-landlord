import Sidebar from "@/components/general/sidebar";
import Topbar from "@/components/general/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex max-h-dvh min-h-dvh overflow-hidden bg-yellow-50/[15%]">
      <Sidebar />

      <div className="no-scrollbar grow overflow-y-auto">
        <div className="sticky top-0 z-[10000] hidden lg:block">
          <Topbar />
        </div>
        {children}
      </div>
    </section>
  );
}
