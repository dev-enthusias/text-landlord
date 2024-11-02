"use client";

import { MailIcon, MailOpenIcon } from "lucide-react";
import { useState } from "react";

export default function NotificationCard() {
  const [notificationStatus, setNotificationStatus] = useState("unread");

  const handleClick = () => {
    setNotificationStatus("read");
  };

  return (
    <article
      className="border-b-grey-200 flex cursor-pointer gap-x-2 border-b bg-white px-3 py-5"
      onClick={handleClick}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
        {notificationStatus === "read" ? <MailOpenIcon /> : <MailIcon />}
        {notificationStatus === "unread" && (
          <div className="absolute left-2.5 top-3 h-2 w-2 animate-pulse rounded-full bg-accent" />
        )}
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">
          Report successfully created
        </h3>
        <p
          className={`w-[calc(100vw-82px)] ${notificationStatus === "unread" && "truncate"} text-sm opacity-80 lg:w-[320px]`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          reiciendis fugit odit autem qui ipsum itaque dolore eum? Rem,
          possimus!
        </p>
        <p className="text-sm font-medium opacity-40">1h ago</p>
      </div>
    </article>
  );
}
