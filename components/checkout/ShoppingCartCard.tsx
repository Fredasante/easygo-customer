import React from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";

const ShoppingCartCard = () => {
  return (
    <div className="border-y p-5">
      <div className="flex items-center space-x-2">
        <Checkbox id="all" />
        <label htmlFor="all" className="text-sm font-medium">
          Kpa-Aps Technologies
        </label>
      </div>

      <div className="my-5 flex">
        <Checkbox />
        <Image
          src="/products/huawei2.jpg"
          width={120}
          height={120}
          alt="Product-image"
        />

        <div>
          <div>
            <h3 className="text-sm font-medium break-words">
              Xiaomi Redmi 10 - 6.5,Android 11, Camera( 50+8+2+2 MP/8MP), 128GB
              HDD - 4GB RAM, 5000mAh - Sea Blue
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
