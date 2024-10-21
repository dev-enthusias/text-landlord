export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[1000000000] flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
}
