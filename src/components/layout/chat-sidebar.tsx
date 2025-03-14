"use client";

import { getAllChatLists } from "@/api/services/chat";
import { routes } from "@/constants/routes";
import { convertTimestampToTimeFormat } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSpinner from "../ui/loading-spinner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/api/firebase.config";
import { SearchIcon } from "lucide-react";
import { BackButton } from "../ui/prev-page";
import { MdInsertPhoto } from "react-icons/md";

export default function ChatList({ id }: { id: string }) {
  const [chatLists, setChatLists] = useState<any[]>([]);
  const [unseenMessageCounts, setUnseenMessageCounts] = useState<
    Record<string, number>
  >({});
  const [loadingChats, setLoadingChats] = useState(true);

  useEffect(() => {
    const fetchAllUnseenMessages = async () => {
      // Create an object to store counts for each room
      const counts: Record<string, number> = {};

      // For each chat room, fetch and count unseen messages
      for (const chat of chatLists) {
        const roomId = chat.roomId;
        const messagesRef = collection(db, "rooms", roomId, "messages");
        const messagesSnap = await getDocs(messagesRef);
        const messagesData = messagesSnap.docs.map((doc) => doc.data());
        const unseenMessages = messagesData.filter(
          (message) => message.status !== "seen" && message.author.id !== id,
        );
        counts[roomId] = unseenMessages.length;
      }

      setUnseenMessageCounts(counts);
    };

    if (chatLists.length > 0) {
      fetchAllUnseenMessages();
    }
  }, [chatLists, id]);

  useEffect(() => {
    let unsubscribe: any = null;

    const fetchChatLists = async () => {
      setLoadingChats(true);
      unsubscribe = await getAllChatLists((chats) => {
        setChatLists(chats);
        setLoadingChats(false);
      });
    };

    fetchChatLists();

    return () => {
      if (unsubscribe) {
        unsubscribe(); // Cleanup the listener on component unmount
      }
    };
  }, []);

  return (
    <div className="relative w-screen shrink-0 lg:w-[320px] xl:w-[380px]">
      <div className="sticky top-0 z-40 bg-[#ece6cb] px-4 py-5">
        <BackButton className="mb-5" />

        <h2 className="mb-2 text-xl font-semibold text-black">Chats</h2>

        <div className="relative flex w-full justify-center rounded-lg">
          <input
            type="search"
            className="w-full max-w-[378px] rounded border-b-gold bg-[#f3f3f3] px-4 py-2 pl-12 text-sm text-black focus:border-b-2 focus:bg-white focus:outline-none"
            placeholder="Search for friends here"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <SearchIcon size={18} />
          </div>
        </div>
      </div>

      <section className="no-scrollbar mb-10 h-full max-w-[429px] overflow-y-auto px-2.5 pt-5">
        {loadingChats ? (
          <div className="no-scrolbar flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : !loadingChats && chatLists.length === 0 ? (
          <p className="text-center text-sm">There is nobody here</p>
        ) : (
          <div className="no-scrollbar grid gap-y-3 px-1">
            {chatLists.map((chat, i) => (
              <FriendCard
                key={i}
                data={chat}
                id={id}
                numberOfUnseenMessages={unseenMessageCounts[chat.roomId] || 0}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export const FriendCard = ({
  data,
  id,
  numberOfUnseenMessages,
}: {
  data: any;
  id: string;
  numberOfUnseenMessages: number | null;
}) => {
  return (
    <Link
      href={routes.CHAT + `/${data.roomId}`}
      replace
      className="flex items-center gap-x-3.5 rounded-lg border-b border-b-gold px-3.5 py-2 text-[#09132C] hover:bg-gold/30"
    >
      <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={data.user_image}
          alt={`${data.name} profile photo`}
          fill
          sizes="72px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex grow flex-col overflow-hidden">
        <div className="flex w-full items-center justify-between">
          <h3 className="max-w-[70%] truncate text-sm font-semibold">
            {data.name}
          </h3>
          <p className="whitespace-nowrap text-xxs">
            {convertTimestampToTimeFormat(data.metadata.createdAt)}
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-x-1">
          <p className="max-w-[80%] overflow-hidden truncate overflow-ellipsis whitespace-nowrap text-xs">
            {data.metadata.type === "image" ? (
              <span className="flex items-center gap-x-1">
                <MdInsertPhoto />
                Photo
              </span>
            ) : (
              data.metadata.text
            )}
          </p>

          {data.metadata.status === "seen" ? (
            // Show double tick (✔✔) when message is seen
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
                fill={data.metadata.status === "seen" ? "#1f45fc" : "#808080"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.336 6.68392C18.6156 6.95698 18.6209 7.40502 18.3479 7.68464L11.4371 14.7613C11.2978 14.9039 11.1049 14.9812 10.9057 14.9741C10.7065 14.967 10.5195 14.8763 10.3907 14.7242L7.39421 11.1859C7.14163 10.8876 7.17865 10.4411 7.4769 10.1885C7.77516 9.93593 8.22169 9.97295 8.47427 10.2712L10.968 13.2159L17.3353 6.69578C17.6083 6.41617 18.0564 6.41085 18.336 6.68392Z"
                fill={data.metadata.status === "seen" ? "#1f45fc" : "#808080"}
              />
            </svg>
          ) : data.metadata.author.id === id &&
            data.metadata.status === "sent" ? (
            // Show single tick when user sends a message with "sent" status
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
                fill="#087c7c"
              />
            </svg>
          ) : numberOfUnseenMessages! > 0 && data.metadata.author.id !== id ? (
            // Show unseen message count for messages not from the user
            <span className="text-primary-500 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-3xs font-semibold leading-none text-white">
              {numberOfUnseenMessages}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};
