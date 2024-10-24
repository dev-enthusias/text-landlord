import ChatSidebar from "./chat-sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh max-h-dvh bg-yellow-50/50 lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)]">
      <section className="flex h-full w-full">
        <div className="no-scrollbar hidden h-dvh overflow-y-auto pb-10 lg:block lg:h-[calc(100vh-80px)] lg:shrink-0">
          <ChatSidebar />
        </div>

        <div className="h-full grow overflow-hidden">{children}</div>
      </section>
    </div>
  );
}
