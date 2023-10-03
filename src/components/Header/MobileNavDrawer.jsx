/* eslint-disable react/prop-types */
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { navItems } from "../../constants/navigation";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { BsChevronDown } from "react-icons/bs";
import Logo from "./Logo";

const MobileNavDrawer = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <Drawer
      open={isNavbarOpen}
      onClose={toggleNavbar}
      direction="left"
      duration={300}
      overlayOpacity={0.5}
      lockBackgroundScroll
      size={250}
      className="block lg:hidden"
    >
      <div className="bg-primary backdrop-filter backdrop-blur-lg h-full text-brand__white">
        <Logo className="mt-0 px-4 py-4 border-b border-gray-400" />
        {isNavbarOpen && (
          <ul className="flex flex-col duration-200">
            {navItems.map(({ title, route }) => (
              <li
                className="group flex items-center hover:bg-bg__gray rounded-full duration-500 relative text-lg"
                key={title}
              >
                <Link
                  className="block rounded-full mx-1 capitalize py-3 xl:py-3 px-4 xl:px-6"
                  to={route}
                >
                  {title}
                </Link>
                {title.includes("packages") && (
                  <>
                    <BsChevronDown className="absolute right-28" size={16} />
                    <Dropdown />
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Drawer>
  );
};

export default MobileNavDrawer;
