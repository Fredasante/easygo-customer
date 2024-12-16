"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import AccountSidebar from "./AccountSidebar";
import AccountSection from "./AccountSection";
import OrdersSection from "../orders/OrdersSection";

const tabs = [
  {
    id: "account",
    label: "My Account",
    component: <AccountSection />,
  },
  {
    id: "orders",
    label: "My Orders",
    component: <OrdersSection />,
  },
];

export default function MyAccountTabs() {
  const [activeTab, setActiveTab] = useState("account");
  const [selectedOption, setSelectedOption] = useState("My Account");

  const handleTabChange = (tabId: string, label: string = "My Account") => {
    setActiveTab(tabId);
    setSelectedOption(label);
  };

  return (
    <div className="flex">
      <div className="w-full py-7 max-w-6xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex gap-3 items-center px-2">
          <BsHouse className="text-gray-600" />

          {tabs.map((tab) => (
            <div key={tab.id} className="flex items-center space-x-2">
              <IoIosArrowForward className="text-gray-400" />
              <button
                className={`px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "bg-secondaryHover rounded-lg text-gray-800"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange(tab.id, tab.label)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar */}
          <AccountSidebar
            selectedOption={selectedOption}
            setSelectedOption={handleTabChange}
          />

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
    </div>
  );
}
