import CheckoutSummary from "./CheckoutSummary";
import DeliveryDetails from "./DeliveryDetails";
import PaymentMethod from "./PaymentMethod";
import ShoppingEdit from "./ShoppingEdit";

const SecureCheckoutTab = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-7 p-4">
      <div className="w-full lg:w-2/3">
        <DeliveryDetails />
        <PaymentMethod />
        <ShoppingEdit />
      </div>
      <CheckoutSummary />
    </div>
  );
};

export default SecureCheckoutTab;
