import ChatLayout from "@/components/layout/chat-layout";

export default function Chat({ children }: { children: React.ReactNode }) {
  return <ChatLayout>{children}</ChatLayout>;
}
