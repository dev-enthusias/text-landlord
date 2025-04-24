import Topbar from "@/components/layout/topbar";
import Footer from "@/components/layout/footer";

export const dynamic = "force-dynamic";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col lg:bg-transparent">
      <Topbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
