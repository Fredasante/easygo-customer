import { Button } from "../ui/button";
import { useState } from "react";
import DeliveryDetails from "../checkout/DeliveryDetails";
import AddressCard from "./AddressCard";

const DeliveryAddressInfo = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddAddressClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="font-semibold mb-4">DELIVERY ADDRESS</h2>
      <AddressCard />
      <div className="flex justify-end">
        <Button onClick={handleAddAddressClick} variant="yellow">
          Add Address
        </Button>
      </div>

      {isFormVisible && (
        <div className="mt-4">
          <DeliveryDetails />
        </div>
      )}
    </div>
  );
};

export default DeliveryAddressInfo;
