import React from "react";
import OrderDetails from "./OrderDetails";

const OrdersSection = () => {
  return (
    <div className="px-4">
      {/* <div className="border p-5 shadow-sm my-5 rounded-lg">
        <h2 className="text-lg font-semibold">My Orders</h2>
        <OrderTabs />
      </div> */}

      <div className="border p-5 shadow-sm my-5 rounded-lg">
        <OrderDetails />
      </div>
    </div>
  );
};

export default OrdersSection;
