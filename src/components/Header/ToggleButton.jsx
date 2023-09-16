/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({ toggleNavbar, toggleModal }) => {
  return (
    <>
      <Button
        onClick={toggleModal}
        className="mt-1.5 hidden md:block relative z-[100]"
      >
        <FaBars size={24} />
      </Button>

      <Button onClick={toggleNavbar} className="mt-1.5 block md:hidden">
        <FaBars size={24} />
      </Button>
    </>
  );
};

export default ToggleButton;
