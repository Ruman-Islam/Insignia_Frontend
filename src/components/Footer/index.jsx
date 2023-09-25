// import Button from "../UI/Button";
import Logo from "../../assets/images/brand/brand_logo.png";
import { BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineCopyrightCircle, AiOutlineMobile } from "react-icons/ai";
import Image from "../UI/Image";
import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../constants/bannerSocialIcons";
import { footerServices } from "../../constants/common";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="relative bg-footer__background bg-cover bg-center text-brand__white py-5">
      <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      <div className="max-w-screen-xl p-content__padding mx-auto relative">
        <div className="hidden md:flex items-center justify-between py-8 lg:rounded-xl">
          <div>
            <p className="lg:text-lg lg:font-semibold">
              Prepare yourself to be a part of exploration of
            </p>
            <p className="lg:text-4xl font-bold font-brand__font__family__fancy">
              The Beauty of World
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-x-5">
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center md:items-start gap-x-5">
            <div className="flex-1">
              <Image alt="logo" src={Logo} />
              <p className="hidden lg:block text-brand__font__size__sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                molestiae odit sit ipsum quo, magnam voluptas cum ut recusandae
                nobis, minima illo inventore repellendus magni culpa sunt
                excepturi veniam ad.
              </p>
              <div className="mt-5 md:mt-10 inline-flex gap-x-5">
                {bannerSocialIcons.map(({ Icon, url }) => (
                  <Link
                    key={url}
                    className="hover:text-brand__light__cyan duration-300"
                    to={url}
                  >
                    <Icon size={30} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1 lg:ml-10 py-5 md:p-0">
              <p className="text-2xl font-brand__font__bold">Services</p>
              {footerServices.map((item, index) => (
                <Link
                  key={index}
                  className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0"
                  to={item.route}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex-1 lg:ml-10 py-5 md:p-0">
              <p className="text-2xl font-brand__font__bold">Useful Links</p>
              {footerServices.map((item, index) => (
                <Link
                  key={index}
                  className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0"
                  to={item.route}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex-1 flex flex-col items-center md:items-start pb-5 md:p-0">
              <p className="text-2xl font-brand__font__bold">Contacts</p>
              <p className="lg:inline-flex lg:items-center gap-x-2">
                <FaLocationDot className="hidden lg:block" />
                Random Location, 51/3, Dhaka
              </p>
              <p className="lg:inline-flex lg:items-center gap-x-2">
                <BsEnvelope className="hidden lg:block" />
                companyname@gmail.com
              </p>
              <p className="lg:inline-flex lg:items-center gap-x-2">
                <AiOutlineMobile className="hidden lg:block" />
                01345678765
              </p>
            </div>
          </div>

          {/* <div className="max-w-[300px]">
            <p className="text-2xl text-center md:text-start">Gallery</p>
            <div className="grid gap-2 grid-cols-2">
              <img
                className="border-transparent rounded-lg"
                src="https://i.ibb.co/dbTHcBt/418f6ffae91ea1b408993e4382c7efa5.jpg"
              />
              <img
                className="border-transparent rounded-lg"
                src="https://i.ibb.co/jgQDMN0/2b157a35a4bac4d8a79a546f9da572ba.jpg"
              />
              <img
                className="border-transparent rounded-lg"
                src="https://i.ibb.co/JxpR0bS/7020c3fc0227118a751dbfa096914ee8.jpg"
              />
              <img
                className="border-transparent rounded-lg"
                src="https://i.ibb.co/YcWjYMH/bddbeda0393be4214a8758332ab6b088.jpg"
              />
            </div>
          </div> */}
        </div>

        <div className="border-b w-full mx-auto my-5"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="uppercase flex items-center gap-x-2">
            <AiOutlineCopyrightCircle /> {year} all rights reserved
          </p>
          <p className="uppercase flex items-center gap-x-2">
            developed by{" "}
            <Link
              className="hover:underline duration-300  font-brand__font__bold"
              to="/"
            >
              Pingdash Technology
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
