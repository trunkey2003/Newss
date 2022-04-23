import React from "react";

// components

import CardLineChart from "./CardLineChart";
import CardBarChart from "./CardBarChart";
import CardPageVisits from "./CardPageVisits.tsx";
import CardSocialTraffic from "./CardSocialTraffic.tsx";

export default function Dashboard() {
  return (
    <div className="bg-blue-200">
      <div className="flex flex-wrap pt-10">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </div>
  );
}
