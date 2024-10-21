import Friends from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh max-h-dvh bg-yellow-50/50 lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)]">
      <section className="flex h-full w-full">
        {/* Friends section with scroll */}
        <div className="no-scrollbar hidden h-dvh overflow-y-auto pb-10 lg:block lg:h-[calc(100vh-80px)] lg:shrink-0">
          <Friends />
        </div>

        {/* Main content without scroll */}
        <div className="h-full grow overflow-hidden">{children}</div>
      </section>
    </div>

    // <div className="h-dvh max-h-dvh bg-yellow-50/50">
    //   <section className="flex h-full w-full border border-green-500">
    //     {/* Friends section with scroll */}
    //     <div className="no-scrollbar hidden h-full overflow-y-auto lg:block lg:shrink-0">
    //       <Friends />
    //     </div>

    //     {/* Main content without scroll */}
    //     <div className="grow overflow-hidden border">{children}</div>
    //   </section>
    // </div>
  );
}
