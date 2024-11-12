"use client";

import React from "react";
import { FaRegCircleUser, FaRegHeart, FaRegStar } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { Separator } from "../ui/separator";

interface AccountSidebarProps {
  selectedOption: string;
  setSelectedOption: (tab: string, label?: string) => void;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const accountOptions = [
    { label: "My Account", icon: <FaRegCircleUser />, tab: "cart" },
    { label: "My Orders", icon: <LuClipboardList />, tab: "checkout" },
    { label: "Wish List", icon: <FaRegHeart />, tab: null },
    { label: "Reviews", icon: <FaRegStar />, tab: null },
  ];

  return (
    <aside className="w-full md:w-[45%] my-5 bg-gray-50 h-fit p-5 text-gray-700 rounded-lg shadow-sm">
      <div className="mb-8">
        <h2 className="text-sm font-semibold mb-4 text-gray-800">ACCOUNT</h2>
        <Separator className="mt-3 mb-5" />
        <ul>
          {accountOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                if (option.tab) {
                  setSelectedOption(option.tab, option.label);
                } else {
                  setSelectedOption(option.label);
                }
              }}
              className={`flex items-center cursor-pointer mb-5 ${
                selectedOption === option.label
                  ? "font-semibold !text-secondaryGreen transition duration-300"
                  : "text-gray-600"
              }`}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AccountSidebar;
