"use client";

import Friends from "./sidebar";

export default function Chat() {
  return (
    <div className="flex min-h-dvh items-stretch lg:min-h-[calc(100vh-80px)]">
      <div className="no-scrollbar h-dvh overflow-y-auto pb-10 lg:hidden lg:shrink-0">
        <Friends />
      </div>
      <div className="bg-grey-100 hidden h-[calc(100vh-80px)] grow items-center justify-center lg:flex lg:border-l">
        No chat selected
      </div>
    </div>
  );
}
