const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondaryBg p-6">
      {/* Header with Thank You Message */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold">Thank You!</h1>
      </div>

      {/* Information Cards */}
      <div className="mt-8 w-full max-w-xl space-y-4">
        {/* Card 1 */}
        <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="font-semibold">Your order is confirmed</h2>
            <p className="text-brandDisabled text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Justo amet dis morbi in
              quis fermentum quis nulla ultrices. Faucibus facilisi turpis
              ligula blandit aliquam. Nulla sit ornare semper scelerisque vel in
              cras.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="font-semibold">Order updates</h2>
            <p className="text-brandDisabled text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Justo amet dis morbi in
              quis fermentum quis nulla ultrices. Faucibus facilisi turpis
              ligula blandit aliquam. Nulla sit ornare semper scelerisque vel in
              cras.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="font-semibold">Customer information</h2>
            <p className="text-brandDisabled text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Justo amet dis morbi in
              quis fermentum quis nulla ultrices. Faucibus facilisi turpis
              ligula blandit aliquam. Nulla sit ornare semper scelerisque vel in
              cras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
