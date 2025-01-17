import Link from "next/link";
import Image from "next/image";
import { BackButton } from "@/components/ui/prev-page";
import { routes } from "@/constants/routes";
import { SearchIcon } from "lucide-react";

export default function ChatSidebar() {
  return (
    <div className="relative w-screen shrink-0 lg:w-[320px] xl:w-[380px]">
      <div className="sticky top-0 z-40 bg-[#ece6cb] px-7 py-5">
        <BackButton className="mb-5 text-lg" />

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

      <section className="mb-10 h-full max-w-[429px] overflow-y-auto px-2.5 pt-5">
        <section>
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </section>
      </section>
    </div>
  );
}

export const FriendCard = async () => {
  return (
    <Link href={routes.CHAT + "/0"} replace>
      <article className="flex items-center gap-x-3.5 rounded-lg px-3.5 py-2 text-[#09132C] hover:bg-gold/30">
        <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt="name of person photo"
            fill
            sizes="72px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex grow flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Jane Cooper</h3>
            <p className="text-xxs">07:38am</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs">Haha that&apos;s hillarious</p>
            {false ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2891 6.68392C14.5687 6.95698 14.574 7.40502 14.301 7.68464L7.39018 14.7613C7.25093 14.9039 7.058 14.9812 6.85882 14.9741C6.65964 14.967 6.47266 14.8763 6.34386 14.7242L3.34734 11.1859C3.09476 10.8876 3.13178 10.4411 3.43003 10.1885C3.72828 9.93593 4.17482 9.97295 4.4274 10.2712L6.92114 13.2159L13.2884 6.69578C13.5615 6.41617 14.0095 6.41085 14.2891 6.68392Z"
                  fill="#087c7c"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
};
