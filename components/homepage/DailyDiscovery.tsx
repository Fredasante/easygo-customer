import { dailyDiscoveries } from "@/data/products";
import ProductCard from "./ProductCard";

const DailyDiscovery = () => {
  return (
    <div className="mt-10 mb-7">
      <h1 className="text-xl md:text-2xl font-bold">Daily Discovery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:px-0 mt-3 w-full">
        {dailyDiscoveries.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DailyDiscovery;
