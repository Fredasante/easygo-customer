import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

const helpCenterItems = [
  { href: "/", label: "Help Center" },
  { href: "/", label: "Returns Policy" },
  { href: "/", label: "Report a Product" },
  { href: "/", label: "FAQ" },
  { href: "/", label: "Delivery and returns" },
];

const aboutItems = [
  { href: "/", label: "About Us" },
  { href: "/", label: "Terms and Conditions" },
  { href: "/", label: "Privacy and Cookie Notice" },
];

const paymentMethods = [
  { src: "/payment-logos/zeepay.svg", label: "Zeepay" },
  { src: "/payment-logos/gmoney.svg", label: "GMoney" },
  { src: "/payment-logos/MTN Momo.svg", label: "MTN Momo" },
  {
    src: "/payment-logos/Telecel Cash.svg",
    label: "Telecel Cash",
  },
  {
    src: "/payment-logos/AT Money.svg",
    label: "AT Money",
  },
  {
    src: "/payment-logos/Visa.svg",
    label: "Visa",
  },
  {
    src: "/payment-logos/Mastercard.svg",
    label: "Mastercard",
  },
];

const socialIcons = [
  { href: "/", icon: <FaSquareFacebook /> },
  { href: "/", icon: <FaXTwitter /> },
  { href: "/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBrown py-4 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-[#B99470] pt-5 max-w-screen-xl mx-auto">
        <div>
          <h4 className="font-bold mb-4">LET US HELP YOU</h4>
          <ul className="space-y-2">
            {helpCenterItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">ABOUT US</h4>
          <ul className="space-y-2">
            {aboutItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">PAYMENT METHODS</h4>
          <ul className="grid grid-cols-4 gap-4 w-fit">
            {paymentMethods.map((item, i) => (
              <li key={i}>
                <Image src={item.src} alt={item.label} width={22} height={22} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">JOIN US ON</h4>
          <ul className="flex space-x-4">
            {socialIcons.map((item, i) => (
              <li key={i}>
                <Link className="text-xl" href={item.href}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-gray-500 text-center text-[15px] mt-8">
        Easygo © 2024. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
