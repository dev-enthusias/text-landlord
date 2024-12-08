"use client";

import React, { useEffect, useRef, useState } from "react";
import NotificationCard from "./notification-card";
import { BellRing, ChevronLeft } from "lucide-react";
import { NotificationResponseType } from "@/definition";
import { markAllNotificationAsRead } from "@/lib/actions";

export default function NotificationBtn({
  notifications,
}: {
  notifications: NotificationResponseType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const unreadCount = notifications?.notifications?.filter(
    (notification) => !notification.is_read,
  ).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        notificationRef.current &&
        !notificationRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    // Correctly type the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent click from bubbling up and triggering the outside click handler
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle notifications"
      >
        <BellRing className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold/70 text-xxs font-bold text-black">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={notificationRef}
          onClick={handleNotificationClick}
          className="fixed right-0 top-16 z-50 flex h-[calc(100vh-64px)] w-full max-w-[420px] flex-col rounded-lg border border-gray-200 bg-white lg:top-20 lg:h-[calc(100vh-80px)]"
        >
          <section className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
            <div className="flex items-center gap-x-4 text-black">
              <button onClick={() => setIsOpen(false)} className="md:hidden">
                <ChevronLeft />
              </button>
              <h1 className="text-xl font-semibold">Notifications</h1>
            </div>
            <form action={markAllNotificationAsRead}>
              <button className="text-[14px] font-semibold text-accent hover:underline">
                Mark all as read
              </button>
            </form>
          </section>
          <section className="no-scrollbar h-full grow overflow-y-scroll">
            <div className="divide-y divide-gray-100">
              {notifications.notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
