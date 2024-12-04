import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/footer-menu";
import Topbar from "@/components/layout/topbar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Topbar />
      <div className="grow">{children}</div>
      <Footer />
      <Menu />
    </div>
  );
}
