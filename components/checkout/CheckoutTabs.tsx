"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";
import SecureCheckout from "./SecureCheckout";
import OrderComplete from "./OrderComplete";

const tabs = [
  {
    id: "cart",
    label: "Shopping Cart",
    component: <ShoppingCart />,
  },
  {
    id: "checkout",
    label: "Secure Checkout",
    component: <SecureCheckout />,
  },
  {
    id: "complete",
    label: "Order Complete",
    component: <OrderComplete />,
  },
];

export default function CheckoutTabs() {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="w-full my-7">
      {/* Tabs Navigation */}
      <div className="flex gap-3 items-center">
        <BsHouse className="text-gray-600" />

        {tabs.map((tab) => (
          <div key={tab.id} className="flex items-center space-x-2">
            {/* Render Arrow always, but change its color based on active tab */}
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
  );
}
