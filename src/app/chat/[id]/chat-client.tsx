"use client";

import { db } from "@/api/services/firebase";
import ChatFooter from "@/components/layout/chat-footer";
import ChatHeader from "@/components/layout/chat-header";
import { ChatMessage } from "@/definition";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ChatClient({
  roomId,
  userId,
  initialMessages,
  chatPartner,
}: {
  roomId: string;
  userId: string;
  initialMessages: ChatMessage[];
  chatPartner: any;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(
    initialMessages.sort((a, b) => a.createdAt - b.createdAt), // Ensure correct order on first load
  );

  useEffect(() => {
    const messagesRef = collection(db, "rooms", roomId, "messages");
    const unsubscribe = onSnapshot(messagesRef, (querySnapshot) => {
      const updatedMessages: ChatMessage[] = querySnapshot.docs.map(
        (doc) => doc.data() as ChatMessage,
      );

      // Sort messages by createdAt to maintain chronological order
      updatedMessages.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(updatedMessages);
    });

    return () => unsubscribe();
  }, [roomId]);

  return (
    <section className="flex h-full grow flex-col bg-[#FAFAFA] lg:pb-7">
      <ChatHeader data={chatPartner} />
      <main className="no-scrollbar grow overflow-y-auto px-4 lg:px-7 pb-4">
        <div className="flex flex-col gap-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                userId === message.author.id
                  ? "self-end bg-blue-100 text-right"
                  : "self-start bg-gray-200 text-left"
              } mb-2 max-w-[350px] rounded-lg p-2`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
      </main>
      <ChatFooter />
    </section>
  );
}
