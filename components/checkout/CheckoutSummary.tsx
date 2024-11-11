import { Button } from "../ui/button";

const CheckoutSummary = () => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="p-4 border rounded-lg shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>GHS 0.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Delivery Fee</span>
          <span>GHS 0.00</span>
        </div>
        <div className="flex justify-between text-sm font-bold mb-5">
          <span>Total</span>
          <span>GHS 0.00</span>
        </div>
        <Button variant="yellow" className="w-full">
          Place Order
        </Button>
        <p className="text-center text-xs mt-5 text-brandSecondary">
          Upon clicking &quot;Place Order&quot;, I confirm I have read and
          acknowledged all terms and policies.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
