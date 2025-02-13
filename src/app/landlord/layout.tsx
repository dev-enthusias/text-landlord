import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/footer-menu";
import Topbar from "@/components/layout/topbar";
import WaitlistModal from "@/components/modals/waitlist";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="flex min-h-screen flex-col">
        <Topbar />
        <div className="grow">{children}</div>
        <Footer />
        <Menu />
      </div>
      <WaitlistModal />
    </section>
  );
}
