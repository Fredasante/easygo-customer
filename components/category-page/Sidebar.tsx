"use client";

import { categories } from "@/data/constants";
import { useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Electronics & Gadgets"
  );
  return (
    <aside className="w-full md:w-[50%] bg-brandSecondaryBg h-fit p-5 text-brandSecondary rounded-lg">
      <div className="mb-8">
        <h2 className="text-sm font-semibold mb-6">CATEGORIES</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer mb-4 text-tertiaryGray text-sm ${
                selectedCategory === category
                  ? "font-semibold !text-secondaryGreen border-l-2 border-secondaryGreen pl-2 transition duration-300"
                  : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-gray-300">
        <h3 className="font-semibold mb-6 text-sm mt-5">SEARCH FILTER</h3>
        <div className="flex items-center space-x-2 my-4">
          <Checkbox id="discount" />
          <label htmlFor="discount" className="text-sm font-medium">
            Discount
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-4 mb-5">
          <Checkbox id="sale" />
          <label htmlFor="sale" className="text-sm font-medium">
            Sale
          </label>
        </div>
        <div className="border-t border-gray-300">
          <label className="block mb-1 mt-5 text-sm font-semibold">Price</label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="GHS 0.00"
              className="w-1/2 p-2 bg-white placeholder-black placeholder:font-medium"
            />

            <Input
              type="number"
              placeholder="GHS 0.00"
              className="w-1/2 p-2 bg-white placeholder-black placeholder:font-medium"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
