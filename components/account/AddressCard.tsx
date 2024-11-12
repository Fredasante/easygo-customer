import { GoPencil } from "react-icons/go";
import { Button } from "../ui/button";

const AddressCard = () => {
  return (
    <div className="flex items-center justify-between border w-full p-4 rounded-lg space-x-3 my-5">
      <div className="flex items-center space-x-3">
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
  );
};

export default AddressCard;
