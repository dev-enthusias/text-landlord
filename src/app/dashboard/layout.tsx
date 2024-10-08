export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen bg-yellow-50/[15%]">{children}</section>;
}
