import Footer from "@/components/layout/footer";
import Topbar from "@/components/layout/topbar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
}
