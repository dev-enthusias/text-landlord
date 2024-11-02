import Topbar from "./topbar";

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

function Footer() {
  return (
    <footer className="bg-[#cecaa3] py-5">
      <p className="text-center text-black">
        © 2024 Oga LandLords . All Rights Reserved.
      </p>
    </footer>
  );
}
