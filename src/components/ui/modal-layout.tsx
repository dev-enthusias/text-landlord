export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[500] flex h-dvh items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
}
