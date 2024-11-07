import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProductsList = () => {
  return (
    <div className="mt-10 px-5 lg:px-0">
      <h1 className="text-xl md:text-2xl font-bold">More to Love</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-0 mt-3 w-full">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsList;
