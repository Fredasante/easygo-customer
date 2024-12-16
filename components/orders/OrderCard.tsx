import Image from "next/image";
import { Separator } from "../ui/separator";

const OrderCard = () => {
  return (
    <div className="my-6">
      <div className="my-5 flex flex-col md:flex-row md:items-center">
        <Image
          src="/products/huawei.jpg"
          width={120}
          height={120}
          alt="Product-image"
        />

        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between gap-5">
            <div>
              <h3 className="text-sm font-medium break-words line-clamp-2 max-w-[380px]">
                Xiaomi Redmi 10 - 6.5,Android 11, Camera( 50+8+2+2 MP/8MP),
                128GB HDD - 4GB RAM, 5000mAh - Sea Blue
              </h3>
              <p className="mt-4 text-sm text-brandDisabled">
                Order <span>#1234567890</span>
              </p>
            </div>

            <p className="font-bold">GHS 24.99</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h4 className="font-medium text-sm">
                Qty <span>2</span>
              </h4>
              <p className="text-brandDisabled text-sm">20, August 2024</p>
            </div>

            <button className="text-secondaryGreen font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default OrderCard;
