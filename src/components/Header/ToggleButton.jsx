/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({ toggleNavbar }) => {
  return (
    <>
      {/* <Button
        onClick={toggleModal}
        className="mt-1.5 hidden md:block relative z-[100]"
      >
        <FaBars size={24} />
      </Button> */}

      <div className="flex items-center gap-x-2">
        <div className="flex gap-x-2 items-center font-brand__font__semibold text-brand__font__size__sm lg:text-brand__font__size__base">
          <Link
            className="block border border-brand__gray__border hover:bg-bg__gray duration-300 py-1.5 lg:py-2.5 px-3 lg:px-5 rounded-full backdrop-blur-lg shadow-md"
            to="/"
          >
            Login
          </Link>
          <Link
            className="block border border-brand__gray__border bg-brand__cyan hover:bg-brand__light__cyan duration-300 py-1.5 lg:py-2.5 px-3 lg:px-5 rounded-full shadow-md"
            to="/"
          >
            Sign up
          </Link>
        </div>

        <Button onClick={toggleNavbar} className="block lg:hidden">
          <FaBars size={28} />
        </Button>
      </div>
    </>
  );
};

export default ToggleButton;
