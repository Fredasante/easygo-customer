"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CountrySelect = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex items-center space-x-2 ">
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="GH"
        value={phoneNumber}
        onChange={(value) => setPhoneNumber(value ?? "")}
        className="mt-4 custom-phone-input border p-1 border-gray-300 rounded-md shadow-sm w-full"
      />
    </div>
  );
};

export default CountrySelect;
