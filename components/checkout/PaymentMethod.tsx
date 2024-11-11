import { Checkbox } from "../ui/checkbox";

const PaymentMethod = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm mt-6 bg-white">
      <h2 className="font-semibold mb-4">PAYMENT METHODS</h2>

      <div className="flex items-center space-x-3 my-5">
        <Checkbox id="payment-card" />
        <label htmlFor="payment-card" className="text-sm text-brandSecondary">
          Add a new card
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
