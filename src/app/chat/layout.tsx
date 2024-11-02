import Topbar from "@/components/layout/topbar";
import ChatSidebar from "@/components/layout/chat-sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topbar />
      <div className="h-dvh max-h-dvh lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)]">
        <section className="flex h-full w-full">
          <div className="no-scrollbar hidden h-dvh overflow-y-auto bg-[#ece6cb] pb-10 lg:block lg:h-[calc(100vh-80px)] lg:shrink-0">
            <ChatSidebar />
          </div>

          <div className="h-full grow overflow-hidden">{children}</div>
        </section>
      </div>
    </div>
  );
}
