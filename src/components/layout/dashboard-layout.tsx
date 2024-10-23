import Sidebar from "@/components/general/sidebar";
import Topbar from "@/components/general/topbar";
import { SidebarNavLinks } from "@/definition";

export default function DashboardLayout({
  children,
  navlinks,
}: {
  children: React.ReactNode;
  navlinks: SidebarNavLinks;
}) {
  return (
    <section className="relative flex h-dvh overflow-hidden bg-yellow-50/[15%]">
      <div className="hidden w-[230px] shrink-0 border-r lg:block">
        <Sidebar navlinks={navlinks} />
      </div>

      <div className="no-scrollbar grow overflow-y-auto">
        <Topbar />
        {children}
      </div>
    </section>
  );
}
