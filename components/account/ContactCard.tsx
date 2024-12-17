import { FiPhone, FiMail } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { Button } from "../ui/button";

const ContactCard = () => {
  return (
    <div className="p-4 mx-auto bg-brandLightOrange rounded-lg shadow-sm mb-5 flex justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mt-1">
          Ben-Aaron Mills-Pappoe
        </h2>
        <div className="flex items-center mt-2 text-gray-700">
          <FiPhone className="mr-2" />
          <span>0203802823</span>
        </div>
        <div className="flex items-center mt-2 text-gray-700">
          <FiMail className="mr-2" />
          <span>benaaron866@gmail.com</span>
        </div>
      </div>

      <Button
        variant="outline"
        className="border-none shadow-none bg-transparent mt-0"
      >
        <GoPencil />
      </Button>
    </div>
  );
};

export default ContactCard;
