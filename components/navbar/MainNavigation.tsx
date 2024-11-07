import { menuItems } from "@/data/constants";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-10 text-brandSecondary text-base">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center space-x-2"
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MainNavigation;
