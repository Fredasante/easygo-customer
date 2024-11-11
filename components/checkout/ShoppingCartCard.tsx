import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { FaRegHeart, FaRegTrashCan, FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const ShoppingCartCard = () => {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3">
        <Checkbox id="product" />
        <label htmlFor="product" className="text-sm font-medium">
          Kpa-Aps Technologies
        </label>
      </div>

      <div className="my-5 flex md:items-center flex-col md:flex-row">
        <Checkbox />
        <Image
          src="/products/huawei.jpg"
          width={120}
          height={120}
          alt="Product-image"
        />

        <div className="flex flex-col gap-7 w-full">
          <div className="flex justify-between gap-5">
            <h3 className="text-sm font-medium break-words line-clamp-2 max-w-[380px]">
              Xiaomi Redmi 10 - 6.5,Android 11, Camera( 50+8+2+2 MP/8MP), 128GB
              HDD - 4GB RAM, 5000mAh - Sea Blue
            </h3>

            <div className="flex">
              <Button variant="outline" className="border-none shadow-none">
                <FaRegHeart />
              </Button>
              <Button variant="outline" className="border-none shadow-none">
                <FaRegTrashCan />
              </Button>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <h4 className="font-medium">GHS 24.99</h4>
              <p className="text-brandDisabled text-sm">
                Delivery: GHS <span>20.00</span>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <Button
                className="rounded-full h-8 w-8 flex items-center justify-center"
                variant="outline"
              >
                <FaMinus />
              </Button>
              <span>1</span>
              <Button
                className="rounded-full h-8 w-8 flex items-center justify-center"
                variant="outline"
              >
                <FaPlus />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default ShoppingCartCard;
