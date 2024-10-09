export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-dvh bg-yellow-50/[15%]">{children}</section>;
}
