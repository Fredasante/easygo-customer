import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import { Product } from "@/types/product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="w-full bg-white shadow-md rounded-xl relative">
      {product.discount && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-se-xl rounded-es-md z-10">
          -{product.discount}
        </div>
      )}
      <Link
        href={`/product/${product.id}-${product.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <div className="relative">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.title}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent>
        <div className="flex items-center gap-5">
          <h4 className="text-lg font-bold">{product.price}</h4>
          <p className="line-through text-sm text-secondaryGray">
            {product.oldPrice}
          </p>
        </div>
        <p className="text-sm mt-2 line-clamp-2">{product.title}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-primaryGreen text-white px-3 py-1 rounded-2xl">
            <span className="text-sm">★</span>
            <span className="font-semibold text-sm">{product.rating}</span>
          </div>
          <div className="w-px h-5 bg-gray-300 mx-3"></div>
          <span className="text-sm text-gray-700">Sold {product.sold}</span>
        </div>
        <div className="bg-tertiaryBrown w-7 h-7 flex items-center justify-center rounded-full">
          <MdAddShoppingCart className="text-white" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
