import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { menuItems } from "@/data/constants";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to Easygo</SheetTitle>
          <Separator />
          <div className="flex flex-col gap-4 md:hidden text-brandSecondary !mt-5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
