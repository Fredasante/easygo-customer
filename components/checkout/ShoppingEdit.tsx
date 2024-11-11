import { GoPencil } from "react-icons/go";
import { Separator } from "../ui/separator";
import ShoppingCartCard from "./ShoppingCartCard";
import { Button } from "../ui/button";

const ShoppingEdit = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm mt-6 bg-white">
      <div className="flex justify-between">
        <h2 className="font-semibold mb-4">SHOPPING</h2>
        <Button variant="outline" className="border-none shadow-none">
          <GoPencil />
        </Button>
      </div>
      <Separator className="my-2" />
      <ShoppingCartCard />
    </div>
  );
};

export default ShoppingEdit;
