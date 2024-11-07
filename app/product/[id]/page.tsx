import ProductImage from "@/components/product-details/ProductImage";
import ProductInfo from "@/components/product-details/ProductInfo";
import SellerInfo from "@/components/product-details/SellerInfo";
import DeliverySection from "@/components/product-details/DeliverySection";
import DescriptionSection from "@/components/product-details/DescriptionSection";
import RatingSummary from "@/components/product-details/RatingSummary";
import { featuredProducts, reviews } from "@/data/products";
import CustomerReviewCard from "@/components/product-details/CustomerReviewCard";
import ProductCard from "@/components/homepage/ProductCard";

const ProductDetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-7 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-5 md:gap-10 w-full">
        <div className="w-full lg:w-[75%] flex flex-col md:flex-row">
          <div className="md:w-2/3 w-full h-full">
            <ProductImage />
          </div>
          <section className="space-y-6 md:w-3/5">
            <ProductInfo />
            <SellerInfo />
          </section>
        </div>
        <section className="w-full lg:w-[25%]">
          <DeliverySection />
        </section>
      </div>
      <div className="w-full lg:w-[75%]">
        <DescriptionSection />
        <RatingSummary />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <CustomerReviewCard key={index} review={review} />
          ))}
        </div>
        <h4 className="text-xl font-bold mt-8">Related Products</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-0 my-3 w-full">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
