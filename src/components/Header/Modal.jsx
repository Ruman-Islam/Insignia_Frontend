import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import brand___logo from "../../assets/images/brand/brand_logo.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { bannerSocialIcons } from "../../constants/bannerSocialIcons";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { ImCross } from "react-icons/im";

// eslint-disable-next-line react/prop-types
const Modal = ({ isModalOpen, toggleModal }) => {
  return (
    <Drawer
      open={isModalOpen}
      onClose={toggleModal}
      direction="right"
      duration={300}
      overlayColor="#607185bf"
      overlayOpacity={0.5}
      lockBackgroundScroll
      size={500}
      className=""
    >
      <div className="bg-[#1e1e1e] h-full p-10 duration-300">
        <Button onClick={toggleModal} className="absolute top-0 -left-10 p-2">
          <ImCross size={24} />
        </Button>
        <img src={brand___logo} alt="" />
        <p className="mb-12 text-lg text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          optio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque, optio?
        </p>
        <div>
          <h3 className="text-2xl text-white font-semibold tracking-wider mb-8">
            Contacts
          </h3>
          <div className="flex items-center gap-x-3 mb-3">
            <MdOutlineLocationOn size={22} className="text-white" />
            <p className="text-sm font-semibold text-white tracking-wider">
              Random Location, 51/3. Dhaka
            </p>
          </div>
          <div className="flex items-center gap-x-3 mb-3">
            <AiOutlineMail size={22} className="text-white" />
            <p className="text-sm font-semibold text-white tracking-wider">
              example@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-x-3 mb-3">
            <BsPhone size={22} className="text-white" />
            <p className="text-sm font-semibold text-white tracking-wider">
              01758947856
            </p>
          </div>
        </div>
        <div className="text-white flex flex-col items-end gap-5">
          {bannerSocialIcons.map(({ Icon, url }) => (
            <Link
              key={url}
              className="hover:text-brand__cyan duration-300"
              to={url}
            >
              <Icon size={30} />
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Modal;
