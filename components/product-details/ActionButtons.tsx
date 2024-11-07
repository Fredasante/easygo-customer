import { Button } from "../ui/button";
import {
  AiOutlineShop,
  AiOutlineShareAlt,
  AiOutlineHeart,
} from "react-icons/ai";

const ActionButtons = () => {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Button className="w-full bg-[#C0C78C] hover:bg-[#b2b980]">
          Buy Now
        </Button>
        <Button variant="outline" className="w-full">
          Add To Cart
        </Button>
      </div>

      <div className="flex justify-between mt-4">
        <Button variant="ghost" size="icon" className="bg-defaultHover w-16">
          <AiOutlineShop className="w-16 h-16" />
        </Button>
        <Button variant="ghost" size="icon" className="bg-defaultHover w-16">
          <AiOutlineShareAlt />
        </Button>
        <Button variant="ghost" size="icon" className="bg-defaultHover w-16">
          <AiOutlineHeart />
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
