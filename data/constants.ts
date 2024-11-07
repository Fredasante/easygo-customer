import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

interface MenuItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const menuItems: MenuItem[] = [
  {
    href: "/wishlist",
    label: "Wishlist",
    icon: React.createElement(FaRegHeart),
  },
  {
    href: "/login",
    label: "Sign/Register",
    icon: React.createElement(FaRegUser),
  },
  { href: "/cart", label: "Cart", icon: React.createElement(FiShoppingCart) },
];

export const productsCategoryList = [
  "Electronics & Gadgets",
  "Fashion & Apparel",
  "Health & Beauty",
  "Home & Living",
  "Food & Beverages",
  "Baby & Kids",
  "Books, Music & Movies",
  "Sports & Outdoors",
  "Mens Clothing",
  "Automotive & Industrial",
  "Pets",
  "Office Supplies",
  "Toys & Games",
  "Travel & Luggage",
  "Gifts & Specialty Items",
  "Home Services",
];

export const categories = [
  "Electronics & Gadgets",
  "Smartphones",
  "Laptops & Computers",
  "Tablets & E-Readers",
  "Cameras & Photography",
  "Wearable Technology",
  "Home Entertainment",
  "Accessories",
];
