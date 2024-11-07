import DailyDiscovery from "@/components/homepage/DailyDiscovery";
import FeaturedProductsList from "@/components/homepage/FeaturedProductsList";
import ProductCategoryCheckbox from "@/components/homepage/ProductCategoryCheckbox";
import ProductDiscount from "@/components/homepage/ProductDiscount";

export default function Home() {
  return (
    <div>
      <ProductCategoryCheckbox />
      <FeaturedProductsList />
      <ProductDiscount />
      <DailyDiscovery />
    </div>
  );
}
