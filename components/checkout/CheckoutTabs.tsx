"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import ShoppingCartTab from "./ShoppingCartTab";
import SecureCheckoutTab from "./SecureCheckoutTab";
import OrderCompleteTab from "./OrderCompleteTab";

const tabs = [
  {
    id: "cart",
    label: "Shopping Cart",
    component: <ShoppingCartTab />,
  },
  {
    id: "checkout",
    label: "Secure Checkout",
    component: <SecureCheckoutTab />,
  },
  {
    id: "complete",
    label: "Order Complete",
    component: <OrderCompleteTab />,
  },
];

export default function CheckoutTabs() {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="bg-secondaryBg">
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
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
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
