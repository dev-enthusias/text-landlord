import PrevPageButton from "@/components/ui/prev-page";
import NotificationCard from "../ui/notification-card";

export default function Notifications() {
  return (
    <>
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
        <button className="text-[14px] font-semibold text-accent">
          Mark all as read
        </button>
      </section>
      <section>
        <div>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </section>
    </>
  );
}
