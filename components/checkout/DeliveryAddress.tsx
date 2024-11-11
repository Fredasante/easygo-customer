import { GoPencil } from "react-icons/go";
import { Button } from "../ui/button";

const DeliveryAddress = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="font-semibold mb-4">DELIVERY ADDRESS</h2>
      <div className="flex items-center justify-between w-full border-2 p-4 border-brandYellow rounded-lg space-x-3 my-5">
        <div className="flex items-center space-x-3">
          <input type="radio" id="address" name="address" />
          <div className="text-sm flex flex-col">
            <span className="font-semibold">6th Adote Obour St.</span>
            <span className="text-brandDisabled">
              Accra Dansoman, Greater Accra.
            </span>
          </div>
        </div>
        <Button variant="outline" className="border-none shadow-none">
          <GoPencil />
        </Button>
      </div>
      <div className="flex justify-end">
        <Button variant="yellow">Add Address</Button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
