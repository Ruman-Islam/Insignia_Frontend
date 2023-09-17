/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { dropdownNavItems } from "../../constants/navigation";

const Dropdown = () => {
  return (
    <div className="absolute before:absolute before:w-full before:h-full before:-top-4 hidden group-hover:block top-10 lg:top-12 left-4 w-[200px] mt-2 -ml-2 bg-white text-black font-semibold rounded-md py-2 shadow-md">
      <div className="bg-white relative z-10">
        {dropdownNavItems.map(({ title, route }) => (
          <Link
            key={title}
            to={route}
            className="block px-4 py-2 hover:bg-brand__bg__hover capitalize text-sm"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
