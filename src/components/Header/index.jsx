
import Logo from "./Logo";
import PcNavigation from "./PcNavigation";
import ToggleButton from "./ToggleButton";
// import MobileNavDrawer from "./MobileNavDrawer";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // is using for keep header background color to brand color except home page.
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsNavbarOpen((prevState) => !prevState);
  // };

  // const toggleModal = () => {
  //   setIsModalOpen((prevState) => !prevState);
  // };

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
          <Logo />
          <PcNavigation />
          <ToggleButton
            // toggleNavbar={toggleNavbar}
            // toggleModal={toggleModal}
            // isModalOpen={isModalOpen}
          />
        </div>

        {/* We are not using navigation drawer anymore, using menu functionality */}
        {/* <MobileNavDrawer
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        /> */}

        {/* We are not using this modal right now */}
        {/* <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} /> */}
      </div>
    </header>
  );
};

export default Header;
