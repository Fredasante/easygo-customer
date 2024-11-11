import { Button } from "../ui/button";

const ShoppingSummary = () => {
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
        <div className="flex justify-between text-sm font-bold mb-4">
          <span>Total</span>
          <span>GHS 0.00</span>
        </div>
        <Button variant="yellow" className="w-full">
          Checkout
        </Button>
      </div>

      <div className="p-4 border rounded-lg shadow-sm mt-4 bg-white">
        <h5 className="text-lg font-semibold mb-4">Summary</h5>
        <div className="flex justify-between text-sm font-bold">
          <span>Total</span>
          <span>GHS 0.00</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSummary;
