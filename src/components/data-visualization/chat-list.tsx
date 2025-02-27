"use client";

import { getAllChatLists } from "@/api/services/chat";
import { routes } from "@/constants/routes";
import { convertTimestampToTimeFormat } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSpinner from "../ui/loading-spinner";

export default function ChatList({ id }: { id: string }) {
  const [chatLists, setChatLists] = useState<any[]>([]);
  const [loadingChats, setLoadingChats] = useState(true);

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

  if (loadingChats) {
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Only show "There is nobody here" if we've attempted to load and chatLists is still empty
  if (!loadingChats && chatLists.length === 0) {
    return <p className="text-center text-sm">There is nobody here</p>;
  }

  return (
    <div className="no-scrollbar grid w-full gap-y-3 overflow-x-scroll px-1">
      {chatLists.map((chat, i) => (
        <FriendCard key={i} data={chat} id={id} />
      ))}
    </div>
  );
}

function FriendCard({ data, id }: { data: any; id: string }) {
  return (
    <Link href={routes.CHAT + `/${data.roomId}`} replace>
      <article className="flex items-center gap-x-3 rounded-lg bg-gold/10 px-2 py-1.5 text-[#09132C] hover:bg-gold/15">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={data.user_image}
            alt={`${data.name} profile photo`}
            fill
            sizes="72px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex grow flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{data.name}</h3>
            <p className="text-xxs">
              {convertTimestampToTimeFormat(data.metadata.createdAt)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xxs">{data.metadata.text}</p>
            {(data.metadata.author.id === id && data.metadata.status) !==
            "seen" ? (
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
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.336 6.68392C18.6156 6.95698 18.6209 7.40502 18.3479 7.68464L11.4371 14.7613C11.2978 14.9039 11.1049 14.9812 10.9057 14.9741C10.7065 14.967 10.5195 14.8763 10.3907 14.7242L7.39421 11.1859C7.14163 10.8876 7.17865 10.4411 7.4769 10.1885C7.77516 9.93593 8.22169 9.97295 8.47427 10.2712L10.968 13.2159L17.3353 6.69578C17.6083 6.41617 18.0564 6.41085 18.336 6.68392Z"
                  fill="#087c7c"
                />
              </svg>
            ) : (
              <span className="text-primary-500 rounded-full bg-gold p-1 text-3xs font-semibold leading-none text-white">
                10
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
