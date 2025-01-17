import ChatFooter from "@/components/layout/chat-footer";
import ChatHeader from "@/components/layout/chat-header";

export default function Chat() {
  return (
    <section className="flex h-full grow flex-col bg-[#FAFAFA] lg:pb-7">
      <ChatHeader />

      <main className={`chat-content grow overflow-y-auto px-4 lg:px-7`}></main>

      <ChatFooter />
    </section>
  );
}
