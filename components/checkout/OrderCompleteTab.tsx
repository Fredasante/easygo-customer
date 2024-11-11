import CheckoutSummary from "./CheckoutSummary";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import ShoppingEdit from "./ShoppingEdit";

const OrderCompleteTab = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-7 p-4">
      <div className="w-full lg:w-2/3">
        <DeliveryAddress />
        <PaymentMethod />
        <ShoppingEdit />
      </div>
      <CheckoutSummary />
    </div>
  );
};

export default OrderCompleteTab;
