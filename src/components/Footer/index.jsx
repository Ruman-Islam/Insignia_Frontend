// import Button from "../UI/Button";
import Logo from "../../assets/images/brand/brand_logo.png";
import { BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineCopyrightCircle, AiOutlineMobile } from "react-icons/ai";
import Image from "../UI/Image";
import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../constants/bannerSocialIcons";

const Footer = () => {
  const backgroundImage =
    "https://i.ibb.co/tZ3PZQN/d38ce83998db2197dd851ab6ddec4244-Expires-1693785600-Signature-g-Mi5-Tsdd-WQi-Qid-TB8-L7-KEKk99-Gmn3y.jpg";

  return (
    <section
      className="bg-cover bg-center relative lg:p-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-10"></div>

      <div className="backdrop-blur-lg max-w-screen-xl p-content__padding mx-auto relative border border-brand__gray__border lg:rounded-xl">
        <div className="hidden md:flex items-center justify-between text-white py-8 lg:rounded-xl">
          <div>
            <p className="lg:text-lg lg:font-semibold">
              Prepare yourself to be a part of exploration of
            </p>
            <p className="lg:text-4xl font-bold font-brand__font__family__fancy">
              The Beauty of World
            </p>
          </div>
        </div>

        <div className="text-white flex flex-col md:flex-row justify-center items-center md:items-start gap-x-5">
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
                    className="hover:text-brand__cyan duration-300"
                    to={url}
                  >
                    <Icon size={30} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1 lg:ml-10 py-5 md:p-0">
              <p className="text-2xl font-brand__font__bold">Services</p>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                About Us
              </Link>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                Listing
              </Link>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                How it Works
              </Link>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                Our Services
              </Link>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                Our Blog
              </Link>
              <Link
                className="block py-0.5 hover:text-brand__cyan duration-300"
                to="/"
              >
                Contact Us
              </Link>
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

          <div className="max-w-[300px]">
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
          </div>
        </div>

        <div className="border-b w-full mx-auto my-5"></div>
        <p className="uppercase mr-auto mb-5 text-white inline-flex items-center gap-x-2">
          <AiOutlineCopyrightCircle /> 2023 all rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
