import Image from "next/image";
import { Separator } from "../ui/separator";

const OrderDetailsCard = () => {
  return (
    <div className="my-8">
      <div className="my-5 flex flex-col md:flex-row md:items-center">
        <Image
          src="/products/huawei.jpg"
          width={120}
          height={120}
          alt="Product-image"
        />

        <div>
          <h3 className="text-sm font-medium break-words line-clamp-2 max-w-[90%] mb-5">
            Xiaomi Redmi 10 - 6.5,Android 11, Camera( 50+8+2+2 MP/8MP), 128GB
            HDD - 4GB RAM, 5000mAh - Sea Blue
          </h3>
          <p className="font-bold mb-0.5">GHS 24.99</p>
          <div className="flex justify-between">
            <p className="text-brandDisabled text-sm">20, August 2024</p>

            <p className="text-brandDisabled text-sm">
              Qty <span>3</span>
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default OrderDetailsCard;
