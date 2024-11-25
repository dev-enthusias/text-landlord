import Link from "next/link";
import Image from "next/image";
import { routes } from "@/constants/routes";
import AddAgentBtn from "@/components/modals/add-agent";
import AddTenantBtn from "@/components/ui/add-tenant-btn";
import AddPropertyBtn from "@/components/modals/add-property";
import { LuUsers2 } from "react-icons/lu";
import { MdHomeWork } from "react-icons/md";
import { LiaCoinsSolid } from "react-icons/lia";
import { RiErrorWarningFill } from "react-icons/ri";
import { MoveDownIcon, MoveUpIcon } from "lucide-react";
import { FaHourglassHalf, FaUsers } from "react-icons/fa";
import { getToken, getUsername } from "@/lib/actions";
import { LandlordDashboardStatisticResponseDataType } from "@/definition";
import { BASE_URL } from "@/lib/axios-instance";

async function getStatistics(): Promise<
  LandlordDashboardStatisticResponseDataType | undefined
> {
  const token = await getToken();
  console.log(token);

  try {
    const response = await fetch(`${BASE_URL}/private/v1/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return result.data;
  } catch (error: unknown) {
    console.error("Fetch error:", error);
  }
}

export default async function Home() {
  const name = await getUsername();
  const data = await getStatistics();

  return (
    <section className="mx-auto w-full max-w-[1300px] px-5 py-7 pb-10 sm:pb-20 md:px-10 lg:px-16 xl:px-20">
      {/* Greeting */}
      <div className="font-cormorant">
        <h1 className="text-2xl font-bold text-black">
          Good morning, {name?.split(" ")[0]}!
        </h1>
        <p className="font-semibold text-black">
          Let&apos;s help you get a god view of your properties
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 items-start gap-5 lg:grid-cols-7">
        {/* Left Hand Side */}
        <section className="col-span-2 lg:col-span-5">
          <div className="mb-5 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-10">
            <FinanceSummary
              title="Total Revenue"
              icon={<LiaCoinsSolid />}
              total="₦200M"
              description={<p>Total paid rent this year</p>}
              color="#4A4A4A"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Overdue"
              icon={<RiErrorWarningFill size={14} />}
              total="20"
              description={<p>₦3M Sum of overdue rent</p>}
              color="#D32F2F"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Upcoming"
              icon={<FaHourglassHalf size={14} />}
              total="50"
              description={<p>₦600M Sum of upcoming rent</p>}
              color="#D4A017"
              textColor="#000000"
            />
          </div>

          <div className="mb-5 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-10">
            <PersonalSummary
              title="Total Properties"
              icon={<MdHomeWork />}
              total={data ? data.total_properties : "Loading..."}
              description={
                <p>
                  {data?.total_occupied} occupied, {data?.total_vacant} vacant
                </p>
              }
              button={<AddPropertyBtn />}
            />
            <PersonalSummary
              title="Total Tenants"
              icon={<FaUsers />}
              total="15"
              description={<p>195 active, 5 inactive</p>}
              button={<AddTenantBtn />}
            />
            <PersonalSummary
              title="Total Agents"
              icon={<LuUsers2 />}
              total="20"
              description={<p>30 assigned to properties</p>}
              button={<AddAgentBtn />}
            />
          </div>

          <div className="rounded-lg bg-white p-5">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-black">
                Recent Transactions
              </h3>
            </div>

            <div className="space-y-3">
              <TransactionCard status="credit" />
              <TransactionCard status="debit" />
              <TransactionCard status="debit" />
            </div>
          </div>
        </section>

        {/* Right Hand Side */}
        <section className="col-span-2 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-lg bg-white px-5 pb-5 pt-3">
            <h3 className="mb-4 text-lg font-semibold text-black">Chats</h3>
            <div className="no-scrollbar grid w-full gap-y-3 overflow-x-scroll px-1">
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <div className="hidden gap-y-3 md:grid lg:hidden">
                <FriendCard />
                <FriendCard />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white px-5 pb-5 pt-3">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">Reports</h3>
              <Link
                href={routes.REPORTS}
                className="text-sm underline transition-colors duration-300 hover:text-black"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <Report />
              <Report />
              <Report />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function FinanceSummary({
  title,
  icon,
  total,
  description,
  color,
  textColor,
}: {
  title: string;
  icon: React.ReactNode;
  total: string;
  description: React.ReactNode;
  color: string;
  textColor?: string;
}) {
  return (
    <article
      className="w-full rounded-lg px-5 py-3"
      style={{ background: color, color: textColor }}
    >
      <div className="flex items-center gap-x-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-lg">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="ml-9 py-1 text-2xl font-bold">{total}</p>
      <div className="ml-9 text-xs">{description}</div>
    </article>
  );
}

function PersonalSummary({
  title,
  icon,
  total,
  description,
  button,
}: {
  title: string;
  icon: React.ReactNode;
  total: number | React.ReactNode;
  description?: React.ReactNode;
  button: React.ReactNode;
}) {
  return (
    <article className="custom-shadow-sm w-full rounded-lg bg-white px-5 pb-4 pt-3 text-black/80">
      <div className="flex items-center gap-x-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 backdrop-blur-lg">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="ml-9 py-1 text-2xl font-bold">{total}</p>
      <div className="ml-9 text-xs">{description}</div>
      <div className="ml-9 mt-3 text-sm">{button}</div>
    </article>
  );
}

function Report() {
  return (
    <article>
      <div className="mb-2 flex gap-x-2">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex grow justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Smith Junior
            </h3>
            <p className="text-xxs text-accent">Tenant report</p>
          </div>
          <p className="text-xs">10:15AM</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="flex w-10 shrink-0 justify-center">
          <div className="h-full w-0.5 border-r" />
        </div>
        <p className="text-sm">
          I dont know what is wrong with my toilet plumbing it wont flush
        </p>
      </div>
    </article>
  );
}

function FriendCard() {
  return (
    <Link href={routes.CHAT + "/0"} replace>
      <article className="flex items-center gap-x-3 rounded-lg bg-gold/10 px-2 py-1.5 text-[#09132C] hover:bg-gold/15">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
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
            <p className="text-xxs">Haha that&apos;s hillarious</p>
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
}

function TransactionCard({ status }: { status: "credit" | "debit" }) {
  return (
    <article className="flex flex-wrap items-center justify-between gap-2 gap-x-1 border-b border-b-gray-200 pb-3 last:border-none">
      <div className="flex items-start gap-x-2 sm:items-center">
        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
          {status === "credit" ? (
            <MoveDownIcon className="h-3 w-3" />
          ) : (
            <MoveUpIcon className="h-3 w-3" />
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            Emperica in Dazil, Villa
          </h3>
          <p className="text-xs" title="Palaxisto Emeriando Plaza Road">
            {/* {"Palaxisto Emeriando Plaza Road another".length > 25
              ? "Palaxisto Emeriando Plaza Road another".slice(0, 28) + "..."
              : "Palaxisto Emeriando Plaza Road another"} */}
            Palaxisto Emeriando Plaza Road
          </p>
          <p className="text-xxs font-normal text-gray-500 sm:hidden">
            18th August, 12:17 PM
          </p>
        </div>
      </div>

      <p className="hidden text-sm font-normal text-gray-500 sm:block">
        18th August, 12:17 PM
      </p>

      <div className="shrink-0 text-base font-bold text-black">
        <p>₦650,000</p>
        <p
          className={`text-left text-xs font-normal ${status === "debit" ? "text-red-600" : "text-green-600"}`}
        >
          {status === "debit" ? "Debit" : "Credit"}
        </p>
      </div>
    </article>
  );
}
