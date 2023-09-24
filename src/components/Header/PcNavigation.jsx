import { navItems } from "../../constants/navigation";
import { BsChevronDown } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";

const PcNavigation = () => {
  return (
    <div className="border hidden md:block border-brand__gray__border rounded-full backdrop-filter backdrop-blur-lg font-brand__font__semibold">
      <ul className="flex items-center px-1 lg:px-2 xl:px-4 py-0.5 xl:py-1 duration-200">
        {navItems.map(({ title, route }) => (
          <li
            className="group flex items-center hover:bg-bg__gray rounded-full duration-500 relative"
            key={title}
          >
            <HashLink
              className="block rounded-full mx-1 uppercase py-3 xl:py-3 px-4 text-brand__font__size__sm"
              to={route}
            >
              {title}
            </HashLink>
            {title.includes("packages") && (
              <>
                <BsChevronDown
                  className="absolute top-4 right-0 xl:right-[3px]"
                  size={14}
                />
                <Dropdown />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PcNavigation;
