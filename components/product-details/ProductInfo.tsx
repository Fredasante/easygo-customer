import { Separator } from "../ui/separator";

const ProductInfo: React.FC = () => (
  <div>
    <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">
      Xiaomi Redmi 10 - 6.5, Android 11, Camera(50+8+2+2 MP/8MP), 128GB HDD -
      4GB RAM, 5000mAh - Sea Blue
    </h1>
    <Separator className="mt-5" />
    <div className="text-2xl font-bold my-5">GHS 77.00</div>
    <ul className="text-brandSecondary">
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        praesentium quaerat fugit maiores, voluptatem aspernatur eius corrupti
        aut totam eum?
      </li>
      <li className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde
        fuga dolores alias distinctio itaque modi assumenda quia tempora aut
        totam eum?
      </li>
    </ul>
  </div>
);

export default ProductInfo;
