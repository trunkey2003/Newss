import Link from "next/link";
import React, { useState } from "react";
import TotalTrafficIcon from '@mui/icons-material/SsidChart';
import IntermediateTrafficIcon from '@mui/icons-material/Timeline';
import UsersIcon from '@mui/icons-material/People';
import ProfilesIcon from '@mui/icons-material/FolderShared';

// components

import CardStats from "./CardStats"

export default function HeaderStats() {
  const [totalTrafficStat, setTotalTrafficStat] = useState('0');
  const [userStat, setUserStat] = useState('0');
  const [saleStat, setSaleStat] = useState('0');
  const [intermediateTrafficStat, setIntermediateTrafficStat] = useState('0');
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <Link href='/admin/total-traffic'>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="TOTAL TRAFFIC"
                    statTitle={totalTrafficStat}
                    statArrow="up"
                    statPercent="0"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since yesterday"
                    statIcon={TotalTrafficIcon}
                    statIconColor="bg-red-500"
                  />
                </div>
              </Link>

              <Link href='/admin/intermediate-url-traffic'>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="INTERMEDIATE URL TRAFFIC"
                    statTitle={userStat}
                    statArrow="down"
                    statPercent="0"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    statIcon={IntermediateTrafficIcon}
                    statIconColor="bg-green-500"
                  />
                </div>
              </Link>

              <Link href='/admin/users'>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="USERS"
                    statTitle={userStat}
                    statArrow="down"
                    statPercent="0"
                    statPercentColor="text-red-500"
                    statDescripiron="Since yesterday"
                    statIcon={UsersIcon}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>

              <Link href='/admin/profiles'>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="PROFILES"
                    statTitle={userStat}
                    statArrow="up"
                    statPercent="0"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since yesterday"
                    statIcon={ProfilesIcon}
                    statIconColor="bg-cyan-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
