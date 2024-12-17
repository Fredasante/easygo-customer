"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { logout } from "@/store/auth-reducer";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, Building, Heart } from "lucide-react";

import { menuItems } from "@/data/constants";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, userProfile } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("userProfile");
    }
    router.push("/auth/login");
  };

  const filteredMenuItems = isAuthenticated
    ? menuItems.filter((item) => item.label !== "Sign/Register")
    : menuItems;

  return (
    <div className="hidden md:flex items-center gap-8 text-brandSecondary text-base">
      {filteredMenuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center space-x-2"
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}

      {isAuthenticated && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-6 w-6 rounded-full">
              <Avatar>
                <AvatarImage src="/images/avatar-anon.jp" />
                <AvatarFallback className="bg-brandLightOrange">
                  {userProfile?.firstname?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-52 px-5 py-3"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {userProfile?.firstname + " " + userProfile?.lastname}
                </p>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                  className="cursor-pointer text-red-600 text-xs font-medium"
                >
                  Logout
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/account"
                className="cursor-pointer text-brandSecondary"
              >
                <User className="mr-1 h-4 w-4" />
                <span>My Account</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/orders"
                className="cursor-pointer text-brandSecondary"
              >
                <Building className="mr-1 h-4 w-4" />
                <span>My Orders</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/wishlist"
                className="cursor-pointer text-brandSecondary"
              >
                <Heart className="mr-1 h-4 w-4" />
                <span>Wishlist</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default MainNavigation;
