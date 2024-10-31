import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";
import { SidebarNavLinks } from "@/definition";
import AppFooter from "./footer";

export default function DashboardLayout({
  children,
  navlinks,
}: {
  children: React.ReactNode;
  navlinks: SidebarNavLinks;
}) {
  return (
    <section className="relative flex h-dvh overflow-hidden">
      <div className="hidden w-[230px] shrink-0 border-r border-[#a59970] bg-[#e9dcbe] lg:block">
        <Sidebar navlinks={navlinks} />
      </div>

      <div className="no-scrollbar relative grow overflow-y-auto">
        <div className="sticky top-0 z-50 hidden lg:block">
          <Topbar />
        </div>
        <div className="bg-[#f3f3f3]">{children}</div>
        <AppFooter />
      </div>
    </section>
  );
}
