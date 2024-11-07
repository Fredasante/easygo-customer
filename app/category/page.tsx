"use client";

import Sidebar from "@/components/category-page/Sidebar";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/homepage/ProductCard";
import PaginationComponent from "@/components/category-page/PaginationComponent";

const CategoryPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 my-5 max-w-6xl mx-auto px-4">
      <Sidebar />
      <div>
        <h1 className="text-xl font-semibold mb-4">
          Watches <span className="text-muted-foreground">(2,000)</span>
        </h1>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 w-full">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
        <PaginationComponent
          totalItems={90}
          itemsPerPage={9}
          onPageChange={(page) => console.log("Page changed to:", page)}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
