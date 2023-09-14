/* eslint-disable react/prop-types */
import Button from "../Button";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({ toggleNavbar }) => {
  return (
    <>
      <Button className="mt-1.5 hidden md:block">
        <FaBars size={24} />
      </Button>
      <Button onClick={toggleNavbar} className="mt-1.5 block md:hidden">
        <FaBars size={24} />
      </Button>
    </>
  );
};

export default ToggleButton;
