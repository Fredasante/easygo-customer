import React from "react";
import OrderStatus from "./OrderStatus";
import OrderDetailsCard from "./OrderDetailsCard";
import Delivery from "./Delivery";

const OrderDetails = () => {
  return (
    <div>
      <OrderStatus currentStep={2} />
      <OrderDetailsCard />
      <Delivery />
    </div>
  );
};

export default OrderDetails;
