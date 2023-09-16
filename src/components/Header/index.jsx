import { useEffect, useState } from "react";
import Logo from "./Logo";
import PcNavigation from "./PcNavigation";
import ToggleButton from "./ToggleButton";
import MobileNavDrawer from "./MobileNavDrawer";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsNavbarOpen(false);
  }, []);

  return (
    <header
      className={`w-full h-20 md:h-24 lg:h-28 fixed z-50 left-0 right-0 flex justify-between items-center duration-500 ${
        isHomePage ? "bg-transparent" : "bg-brand__cyan"
      }`}
    >
      <div className="max-w-screen-xl m-auto w-full z-50 text-brand__white p-content__padding">
        <div className="flex justify-between items-center">
          <Logo className="mt-2" />
          <PcNavigation />
          <ToggleButton
            toggleNavbar={toggleNavbar}
            toggleModal={toggleModal}
            isModalOpen={isModalOpen}
          />
        </div>
        <MobileNavDrawer
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </div>
    </header>
  );
};

export default Header;
