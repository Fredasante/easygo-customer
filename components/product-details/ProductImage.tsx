import Image from "next/image";

const ProductImage: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <Image
      src="/products/huawei2.jpg"
      alt="Product Image"
      width={500}
      height={500}
      className="object-cover"
    />
  </div>
);

export default ProductImage;
