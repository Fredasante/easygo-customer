import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingSummary from "./ShoppingSummary";

const ShoppingCartTab = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-7">
      <div className="border border-gray-200 rounded-lg p-5 w-full lg:w-2/3 bg-white">
        <h1 className="text-lg md:text-2xl font-semibold mb-7">
          Shopping Cart <span>(5)</span>
        </h1>
        <div className="flex items-center space-x-3 my-5">
          <Checkbox id="all-items" />
          <label htmlFor="all-items" className="text-sm text-brandSecondary">
            Select All Items
          </label>
        </div>
        <Separator className="my-5" />

        <ShoppingCartCard />
        <ShoppingCartCard />
      </div>

      <ShoppingSummary />
    </div>
  );
};

export default ShoppingCartTab;
