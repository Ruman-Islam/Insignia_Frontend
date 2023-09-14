/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { navItems } from "../../constants/navigation";
import { BsChevronDown } from "react-icons/bs";
import Dropdown from "../Dropdown";

const MobileNavigation = ({ isNavbarOpen }) => {
  return (
    <div
      className={`w-full bg-brand__cyan p-content__padding duration-500 ${
        isNavbarOpen ? "max-h-[600px] py-4 md:hidden" : "max-h-[0px]"
      }`}
    >
      {isNavbarOpen && (
        <ul className="flex flex-col items-center duration-200">
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
                  <BsChevronDown
                    className="absolute right-0 xl:right-[6px]"
                    size={16}
                  />
                  <Dropdown />
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNavigation;
