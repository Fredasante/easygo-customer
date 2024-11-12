import PaymentMethod from "../checkout/PaymentMethod";
import ContactCard from "./ContactCard";
import DeliveryAddressInfo from "./DeliveryAddressInfo";

const AccountTab = () => {
  return (
    <div className="my-5 max-w-6xl mx-auto px-4">
      <div className="border p-5 shadow-sm w-full rounded-lg">
        <h2 className="text-lg font-semibold mb-4">My Account</h2>
        <ContactCard />
        <DeliveryAddressInfo />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default AccountTab;
