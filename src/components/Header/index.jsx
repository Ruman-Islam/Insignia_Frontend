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
      className={`w-full h-20 md:h-24 flex justify-between items-center duration-300 font-brand__font_family__regular ${
        isHomePage
          ? "bg-transparent absolute top-0 left-0 right-0 lg:h-28"
          : "bg-brand__light__cyan lg:h-20 shadow-md sticky top-0 z-50"
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
