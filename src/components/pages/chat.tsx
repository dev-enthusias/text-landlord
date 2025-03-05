import { getUserId } from "@/lib/actions";
import ChatList from "../layout/chat-sidebar";

export default async function ChatPage() {
  const id = (await getUserId()) as string;

  return (
    <div className="flex min-h-dvh items-stretch lg:min-h-[calc(100vh-80px)]">
      <div className="no-scrollbar h-dvh overflow-y-auto pb-10 lg:hidden lg:shrink-0">
        <ChatList id={id} />
      </div>
      <div className="bg-grey-100 hidden h-[calc(100vh-80px)] grow items-center justify-center lg:flex lg:border-l">
        No chat selected
      </div>
    </div>
  );
}
