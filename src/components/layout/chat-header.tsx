"use client";

import { useEffect, useState } from "react";
import { db } from "@/api/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import LoadingSpinner from "../ui/loading-spinner";

interface PartnerData {
  name?: string;
  user_image?: string;
  role_id?: number;
}

export default function ChatHeader({ partnerId }: { partnerId: string }) {
  const [data, setData] = useState<PartnerData | null>(null);

  useEffect(() => {
    if (!partnerId) return;

    const fetchPartnerInfo = async () => {
      try {
        const userRef = doc(db, "users", String(partnerId));
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setData(userSnap.data() as PartnerData);
        } else {
          console.warn("Partner user document not found, using fallback");
        }
      } catch (error) {
        console.error("Error fetching partner info:", error);
      }
    };

    fetchPartnerInfo();
  }, [partnerId]);

  if (!data) return <SkeletonHeader />;

  return (
    <header className="mb-4 flex items-center gap-x-4 bg-gold/20 px-5 py-5 lg:ml-0.5 lg:border lg:px-7 lg:py-3">
      <div className="relative h-[58px] w-[58px] overflow-hidden rounded-[9px]">
        {data?.user_image ? (
          <Image
            src={data.user_image}
            alt={`${data.name ?? "User"} profile photo`}
            fill
            sizes="58px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-300">
            <div className="flex h-full w-full items-center justify-center bg-gray-300">
              {(data?.name ?? "Unknown User")
                .split(" ")
                .map((name) => name[0].toUpperCase())
                .join("")}{" "}
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#09132C]">{data?.name}</h3>
        <p className="flex items-center gap-x-1 text-sm text-[#6E7FA9]">
          {data?.role_id === 5
            ? "Tenant"
            : data?.role_id === 4
              ? "Landlord"
              : "Agent"}
        </p>
      </div>
    </header>
  );
}

const SkeletonHeader = () => {
  return (
    <header className="mb-4 flex animate-pulse items-center gap-x-4 bg-gold/20 px-5 py-5 lg:ml-0.5 lg:border lg:px-7 lg:py-3">
      {/* Profile Image Skeleton */}
      <div className="relative h-[58px] w-[58px] overflow-hidden rounded-[9px] bg-gray-300"></div>

      {/* User Info Skeleton */}
      <div>
        <div className="h-5 w-32 rounded-md bg-gray-300"></div>
        <div className="mt-2 h-4 w-24 rounded-md bg-gray-300"></div>
      </div>
    </header>
  );
};
