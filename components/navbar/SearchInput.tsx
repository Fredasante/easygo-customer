import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "../ui/input";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="pl-10 pr-4 py-2 rounded-lg input"
      />
      <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchInput;
