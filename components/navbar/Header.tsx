import Link from "next/link";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="border-b border-gray-300 w-full py-4 px-4 sm:px-10 min-h-[70px] relative z-50 bg-secondaryBg">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between gap-4 lg:gap-20">
          <Link className="md:text-2xl text-xl font-bold" href="/">
            <div className="bg-[#D9D9D9] w-16 md:w-32 h-8 md:h-10 rounded-lg"></div>
          </Link>
          <SearchInput />

          <MainNavigation />

          <div className="md:hidden ml-auto">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
