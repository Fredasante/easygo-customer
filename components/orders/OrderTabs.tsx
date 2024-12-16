"use client";

import { useState } from "react";
import AllOrders from "./AllOrders";
import ToBeReceived from "./ToBeReceived";
import CompletedOrders from "./CompletedOrders";
import CancelledOrders from "./CancelledOrders";

const tabs = [
  {
    id: "all-orders",
    label: "All Orders",
    component: <AllOrders />,
  },
  {
    id: "received",
    label: "To be Received",
    component: <ToBeReceived />,
  },
  {
    id: "completed",
    label: "Completed",
    component: <CompletedOrders />,
  },
  {
    id: "cancelled",
    label: "Cancelled",
    component: <CancelledOrders />,
  },
];

export default function OrderTabs() {
  const [activeTab, setActiveTab] = useState("all-orders");

  const handleTabChange = (tabId: string, _label: string = "My Account") => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex">
      <div className="w-full py-4 max-w-6xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex overflow-y-auto gap-4 md:gap-7 items-center border-b border-gray-300 mb-5">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center flex-shrink-0 pb-2 text-sm ${
                activeTab === tab.id
                  ? "border-b-2 font-semibold border-secondaryGreen text-secondaryGreen"
                  : "text-brandSecondary"
              }`}
            >
              <button
                className="transition-colors duration-300"
                onClick={() => handleTabChange(tab.id, tab.label)}
              >
                {tab.label}
              </button>
              <div
                className={`flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full ml-1.5 ${
                  activeTab === tab.id
                    ? "border border-secondaryGreen"
                    : "border border-gray-300"
                }`}
              >
                <span className="text-xs">2</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="w-full">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className="block">
                {tab.component}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
