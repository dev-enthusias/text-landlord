import AddAgentBtn from "@/components/modals/add-agent";
import AddTenantBtn from "@/components/ui/add-tenant-btn";
import AddPropertyBtn from "@/components/modals/add-property";
import { LuUsers2 } from "react-icons/lu";
import { MdHomeWork } from "react-icons/md";
import { LiaCoinsSolid } from "react-icons/lia";
import { RiErrorWarningFill } from "react-icons/ri";
import { MoveDownIcon, MoveUpIcon } from "lucide-react";
import { FaHourglassHalf, FaUsers } from "react-icons/fa";
import { getToken, getUserId } from "@/lib/actions";
import {
  LandlordDashboardStatisticResponseDataType,
  PropertyFieldsResponseDT,
} from "@/definition";
import { GrTransaction } from "react-icons/gr";
import { BASE_URL } from "@/api/config";
import {
  getAllProperties,
  getCountry,
  getPropertyFields,
  getPropertyTypeAndCategory,
} from "@/api/services/property";
import { getProfileDetails } from "@/api/services/profile";
import { getDefaultAccont } from "@/api/services/account";
import ChatList from "@/components/data-visualization/chat-list";

async function getStatistics() {
  const token = await getToken();
  const response = await fetch(`${BASE_URL}/private/v1/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result.data;
}

export default async function Home() {
  const statistics = await getStatistics();
  const profileDetails = await getProfileDetails();

  return (
    <DashboardContent
      statistics={statistics}
      name={profileDetails?.profile_info.name ?? ""}
    />
  );
}

async function DashboardContent({
  statistics,
  name,
}: {
  statistics: LandlordDashboardStatisticResponseDataType;
  name: string;
}) {
  const { categories } = await getPropertyTypeAndCategory();
  const checkDefaultAccount = await getDefaultAccont();
  const properties = await getAllProperties();
  const userId = (await getUserId()) as string;
  const propertyFields =
    (await getPropertyFields()) as PropertyFieldsResponseDT;

  const date = new Date();
  const hour = date.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <section className="mx-auto w-full max-w-[1300px] px-5 py-7 pb-10 sm:pb-20 md:px-10 lg:px-16 xl:px-20">
      {/* Greeting */}
      <div className="font-cormorant">
        <h1 className="text-2xl font-bold text-black">
          {greeting}, {name?.split(" ")[0]}!
        </h1>

        <p className="font-semibold text-black">
          Let&apos;s help you get a good view of your properties
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-7">
        {/* Left Hand Side */}
        <section className="col-span-2 lg:col-span-5">
          <div className="mb-5 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-10">
            <FinanceSummary
              title="Total Revenue"
              icon={<LiaCoinsSolid />}
              total="₦0"
              description={<p>Total paid rent this year</p>}
              color="#4A4A4A"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Overdue"
              icon={<RiErrorWarningFill size={14} />}
              total="0"
              description={<p>₦0 Sum of overdue rent</p>}
              color="#5C3D1E"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Upcoming"
              icon={<FaHourglassHalf size={14} />}
              total="0"
              description={<p>₦0 Sum of upcoming rent</p>}
              color="#D4A017"
              textColor="#000000"
            />
          </div>

          <div className="mb-5 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-10">
            <PersonalSummary
              title="Total Properties"
              icon={<MdHomeWork />}
              total={statistics.total_properties}
              description={
                <p>
                  {statistics.total_occupied} occupied,{" "}
                  {statistics.total_vacant} vacant
                </p>
              }
              button={
                <AddPropertyBtn
                  categories={categories}
                  types={propertyFields.data.types}
                  country={await getCountry()}
                  checkDefaultAccount={checkDefaultAccount}
                />
              }
            />
            <PersonalSummary
              title="Total Tenants"
              icon={<FaUsers />}
              total="0"
              description={<p>0 active, 0 inactive</p>}
              button={<AddTenantBtn properties={properties} />}
            />
            <PersonalSummary
              title="Total Agents"
              icon={<LuUsers2 />}
              total="0"
              description={<p>0 assigned to properties</p>}
              button={<AddAgentBtn properties={properties} />}
            />
          </div>

          <div className="rounded-lg bg-white p-5">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-black">
                Recent Transactions
              </h3>
            </div>

            <div className="grid gap-y-3">
              {statistics.transactions.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-y-1 text-center">
                  <div className="flex items-center justify-center rounded-full bg-gray-200 p-2 text-black">
                    <GrTransaction />
                  </div>
                  You don&apos;t have any available transaction!
                </div>
              ) : (
                statistics.transactions.map((transaction, i) => (
                  <TransactionCard key={i} status="credit" />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Right Hand Side */}
        <section className="col-span-2 grid gap-5 md:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-lg bg-white px-3 pb-5 pt-3">
            <h3 className="mb-4 text-lg font-semibold text-black">Chats</h3>
            <ChatList id={userId} max={6} />
          </div>

          {/* <div className="rounded-lg bg-white px-5 pb-5 pt-3">
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
          </div> */}
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
