import Image from "next/image";

const ProductDiscount = () => {
  return (
    <section className="bg-primaryYellow p-5 mt-10 rounded-lg">
      <div className="max-w-4xl gap-7 lg:gap-20 mx-auto flex flex-col md:flex-row">
        <div className="w-full flex flex-col gap-6 md:gap-10 justify-center">
          <h2 className="text-tertiaryOrange text-xl md:text-2xl lg:text-3xl font-semibold">
            Enjoy unbeatable discounts and great collection of products
          </h2>
          <p className="font-bold text-2xl lg:text-[42px]">UP TO 60% OFF</p>
        </div>

        <div className="bg-primaryYellow">
          <Image
            src="/images/shopping-ladies.png"
            width={600}
            height={600}
            alt="Discount banner"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDiscount;
