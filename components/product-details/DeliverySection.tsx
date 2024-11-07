import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ActionButtons from "./ActionButtons";

const DeliverySection = () => {
  return (
    <Card className="h-fit w-full">
      <CardContent className="p-4">
        <div className="">
          <div>
            <label className="text-sm font-medium">Deliver to</label>
            <Input placeholder="Enter Delivery Location" className="mt-2" />
          </div>
          <Separator className="my-4" />

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Quantity</label>
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
                <span className="text-gray-500 text-sm">2000 available</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <ActionButtons />
    </Card>
  );
};

export default DeliverySection;
