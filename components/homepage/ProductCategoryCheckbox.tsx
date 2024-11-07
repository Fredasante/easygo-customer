"use client";

import { productsCategoryList } from "@/data/constants";
import { useState } from "react";

const ProductCategoryCheckbox = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCheckboxChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-8 mx-4 lg:mx-0 p-5 lg:p-10 bg-[#ECEEDD] rounded-3xl mt-10">
      {productsCategoryList.map((category, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`category-${index}`}
            checked={selectedCategory === category}
            onChange={() => handleCheckboxChange(category)}
            className="appearance-none w-7 h-7 bg-white rounded-full checked:bg-secondaryGreen checked:border-secondaryGreen focus:outline-none
                        relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center"
          />
          <label
            htmlFor={`category-${index}`}
            className="text-sm font-medium text-gray-700"
          >
            {category}
          </label>
        </div>
      ))}
    </section>
  );
};

export default ProductCategoryCheckbox;
