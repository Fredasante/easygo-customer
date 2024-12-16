const Delivery = () => {
  return (
    <div>
      <div className="p-4 rounded-lg shadow-sm bg-secondaryBg mb-5">
        <h2 className="font-semibold mb-4">Delivery Address</h2>
        <p className="text-sm text-brandSecondary mb-2">
          6th Adote Obour Streets
        </p>
        <p className="text-sm text-brandSecondary mb-2">
          Accra Dansoman Greater Ghana
        </p>
      </div>
      <div className="p-4 rounded-lg shadow-sm bg-secondaryBg">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>GHS 0.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Delivery Fee</span>
          <span>GHS 0.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Discount</span>
          <span>GHS 0.00</span>
        </div>
        <div className="flex justify-between text-sm font-bold mb-5">
          <span>Total</span>
          <span>GHS 0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
