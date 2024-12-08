"use client";

import { NotificationType } from "@/definition";
import { markNotificationAsRead } from "@/lib/actions";
import { MailIcon, MailOpenIcon } from "lucide-react";
import { useState } from "react";

export default function NotificationCard({
  notification,
}: {
  notification: NotificationType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = async () => {
    setIsExpanded(true);
    await markNotificationAsRead(notification.id);
  };

  return (
    <article
      className="border-b-grey-200 flex cursor-pointer gap-x-2 border-b bg-white px-3 py-5 last:border-b-0"
      onClick={handleClick}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
        {notification.is_read ? <MailOpenIcon /> : <MailIcon />}
        {!notification.is_read && (
          <div className="absolute left-2.5 top-3 h-2 w-2 animate-pulse rounded-full bg-accent" />
        )}
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">{notification.title}</h3>
        <p
          className={`w-[calc(100vw-82px)] ${
            !notification.is_read && !isExpanded && "truncate"
          } text-sm opacity-80 lg:w-[320px]`}
        >
          {notification.message}
        </p>
        <p className="text-sm font-medium opacity-40">
          {notification.created_at}
        </p>
      </div>
    </article>
  );
}
