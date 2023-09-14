import { useState } from "react";
import Logo from "./Logo";
import PcNavigation from "./PcNavigation";
import ToggleButton from "./ToggleButton";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="w-full relative">
      <div
        className={`max-w-screen-xl m-auto fixed left-0 right-0 w-full z-50  text-brand__white p-content__padding ${
          isNavbarOpen &&
          "backdrop-filter md:backdrop-filter-none backdrop-blur-md md:backdrop-blur-none"
        }`}
      >
        <div className="flex justify-between items-center h-20 md:h-28">
          <Logo />
          <PcNavigation />
          <ToggleButton toggleNavbar={toggleNavbar} />
        </div>
        <MobileNavigation isNavbarOpen={isNavbarOpen} />
      </div>
    </header>
  );
};

export default Header;
