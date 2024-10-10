import Friends from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh max-h-dvh overflow-hidden bg-yellow-50/50">
      <section className="flex h-full w-full overflow-hidden">
        <div className="hidden lg:block lg:shrink-0">
          <Friends />
        </div>
        <div className="grow">{children}</div>
      </section>
    </div>
  );
}
