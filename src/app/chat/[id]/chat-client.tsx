"use client";

import { db } from "@/api/firebase.config";
import ChatFooter from "@/components/layout/chat-footer";
import ChatHeader from "@/components/layout/chat-header";
import { ChatMessage } from "@/definition";
import { convertTimestampToTimeFormat } from "@/utils/formatDate";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

export default function ChatClient({
  roomId,
  userId,
  initialMessages,
  partnerId,
}: {
  roomId: string;
  userId: string;
  initialMessages: ChatMessage[];
  partnerId: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(
    initialMessages.sort((a, b) => a.createdAt - b.createdAt), // Ensure correct order on first load
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  // Function to mark messages as seen
  const markMessagesAsSeen = async () => {
    // Get all the messages in a particular room.
    const messagesRef = collection(db, "rooms", roomId, "messages");
    const messagesSnap = await getDocs(messagesRef);
    const roomMessages = messagesSnap.docs.map((doc) => ({
      ...(doc.data() as ChatMessage),
      id: doc.id,
    }));

    const docRef = doc(db, "rooms", roomId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        "metadata.status": "seen",
      });
    }

    // Update messages in Firestore
    for (const roomMessage of roomMessages) {
      if (roomMessage.status !== "seen" && roomMessage.author.id !== userId) {
        const messageRef = doc(db, "rooms", roomId, "messages", roomMessage.id);
        await updateDoc(messageRef, {
          status: "seen",
        });
      }
    }
  };

  // When messages change, check if they're visible
  useEffect(() => {
    // Use Intersection Observer to detect when messages are visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          markMessagesAsSeen();
        }
      },
      { threshold: 0.5 },
    );

    // Create a timeout to mark messages as seen after a brief delay
    // This handles the case when messages are already visible
    const timer = setTimeout(() => {
      markMessagesAsSeen();
    }, 100);

    // Observe the messages container
    if (messagesEndRef.current) {
      observer.observe(messagesEndRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="flex h-full grow flex-col bg-[#FAFAFA]">
      <ChatHeader partnerId={partnerId} />
      <main className="no-scrollbar grow overflow-y-auto px-4 pb-4 lg:px-7">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                userId === message.author.id
                  ? "self-end bg-gold/40 text-right"
                  : "self-start bg-gray-200 text-left"
              } mb-2 max-w-[240px] rounded-lg p-2 text-sm lg:max-w-[480px] lg:text-base`}
            >
              {message.type === "text" ? (
                <p>{message.text}</p>
              ) : message.type === "image" ? (
                <img
                  // src={message.metadata?.base64image}
                  src={`data:image/jpeg;base64,${message.metadata?.base64image}`}
                  alt=""
                  width={1080}
                  height={700}
                  className="rounded-lg object-cover"
                />
              ) : null}

              <div className="flex items-center justify-end text-[10px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2891 6.68392C14.5687 6.95698 14.574 7.40502 14.301 7.68464L7.39018 14.7613C7.25093 14.9039 7.058 14.9812 6.85882 14.9741C6.65964 14.967 6.47266 14.8763 6.34386 14.7242L3.34734 11.1859C3.09476 10.8876 3.13178 10.4411 3.43003 10.1885C3.72828 9.93593 4.17482 9.97295 4.4274 10.2712L6.92114 13.2159L13.2884 6.69578C13.5615 6.41617 14.0095 6.41085 14.2891 6.68392Z"
                      fill={message.status === "seen" ? "#1f45fc" : "#808080"}
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.336 6.68392C18.6156 6.95698 18.6209 7.40502 18.3479 7.68464L11.4371 14.7613C11.2978 14.9039 11.1049 14.9812 10.9057 14.9741C10.7065 14.967 10.5195 14.8763 10.3907 14.7242L7.39421 11.1859C7.14163 10.8876 7.17865 10.4411 7.4769 10.1885C7.77516 9.93593 8.22169 9.97295 8.47427 10.2712L10.968 13.2159L17.3353 6.69578C17.6083 6.41617 18.0564 6.41085 18.336 6.68392Z"
                      fill={message.status === "seen" ? "#1f45fc" : "#808080"}
                    />
                  </svg>
                </div>

                <span className="mt-0.5 text-right uppercase">
                  {convertTimestampToTimeFormat(message.createdAt)}
                </span>
              </div>
            </div>
          ))}
          {/* This div helps detect when we're at the bottom of the messages */}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <ChatFooter roomId={roomId} userId={userId} />
    </section>
  );
}
