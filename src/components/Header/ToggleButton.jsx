/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import { Menu, Transition /* Switch */ } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Image from "../UI/Image";
import {
  dropdownNavItems,
  navItems,
  userMenuDropdownLinks,
} from "../../constants/navigation";
import { HashLink } from "react-router-hash-link";

const ToggleButton = (/* { toggleNavbar } */) => {
  const isLoggedIn = false;
  const [submenuVisible, setSubmenuVisible] = useState(false);
  // const [enabled, setEnabled] = useState(false);

  return (
    <>
      {/* <Button
        onClick={toggleModal}
        className="mt-1.5 hidden md:block relative z-[100]"
      >
        <FaBars size={24} />
      </Button> */}

      <div className="flex items-center gap-x-2">
        {isLoggedIn ? (
          <div className="relative">
            <Menu as="div">
              <div className="w-10 h-10 border rounded-full">
                <Menu.Button>
                  <Image
                    className="w-full h-full object-cover"
                    src="https://ruman-islam.vercel.app/static/media/profileImage.090616de637a7ada2125.png"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg py-1.5">
                  {userMenuDropdownLinks.map(({ title, route, Icon }) => (
                    <Menu.Item key={title}>
                      {({ active }) =>
                        title.includes("Sign out") ? (
                          <Button
                            onClick={() => console.log("sign in button")}
                            className="text-gray-900 flex w-full items-center  px-2 py-2 text-sm capitalize border-t hover:bg-brand__light__cyan hover:text-white"
                          >
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                            {title}
                          </Button>
                        ) : (
                          <HashLink
                            to={route}
                            className={`${
                              active
                                ? "bg-brand__light__cyan text-white"
                                : "text-gray-900"
                            } group flex w-full items-center px-2 py-2 text-sm capitalize`}
                          >
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                            {title}
                          </HashLink>
                        )
                      }
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex gap-x-2 items-center font-brand__font__semibold text-brand__font__size__sm">
            {/* <div className="flex items-center gap-x-2">
              <span>Foreigner</span>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-brand__orange" : "bg-brand__orange"}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div> */}
            <HashLink
              className="block border border-brand__gray__border hover:bg-bg__gray duration-300 py-1.5 lg:py-2 px-3 lg:px-4 rounded-full shadow-md backdrop-blur-lg"
              to="/sign-in"
            >
              Login
            </HashLink>
            <HashLink
              className="block border border-brand__gray__border bg-brand__cyan hover:bg-bg__gray duration-300 py-1.5 lg:py-2 px-3 lg:px-4 rounded-full shadow-md"
              to="/sign-up"
            >
              Sign up
            </HashLink>
          </div>
        )}

        <Button className="block lg:hidden relative">
          <Menu as="div">
            <Menu.Button className="mt-1">
              <CgMenuRight size={35} />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  {/* Main navbar menu */}
                  {navItems.map(({ title, route, Icon }) => (
                    <Menu.Item key={title}>
                      {({ active }) =>
                        title.includes("packages") ? (
                          <HashLink
                            onClick={(e) => {
                              e.preventDefault();
                              setSubmenuVisible((prev) => !prev);
                            }}
                            to={route}
                            className={`${
                              active
                                ? "bg-brand__light__cyan text-white"
                                : "text-gray-900"
                            } group flex w-full items-center px-2 py-2 text-brand__font__size__sm capitalize`}
                          >
                            <Icon className="mr-2 h-5 w-5" />
                            {title}
                          </HashLink>
                        ) : (
                          <HashLink
                            to={route}
                            className={`${
                              active
                                ? "bg-brand__light__cyan text-white"
                                : "text-gray-900"
                            } group flex w-full items-center px-2 py-2 text-brand__font__size__sm capitalize`}
                          >
                            <Icon className="mr-2 h-5 w-5" />
                            {title}
                          </HashLink>
                        )
                      }
                    </Menu.Item>
                  ))}
                </div>

                {/* This is submenu. It will visible after clicking packages link*/}
                {submenuVisible && (
                  <div className="absolute top-20 left-0 w-full bg-white shadow-lg rounded-bl-md rounded-br-md py-1">
                    {dropdownNavItems.map(({ title, route }) => (
                      <Menu.Item key={title}>
                        {({ active }) => (
                          <HashLink
                            to={route}
                            className={`${
                              active
                                ? "bg-brand__light__cyan text-white"
                                : "text-gray-900"
                            } group flex w-full items-center px-4 py-2 text-sm capitalize`}
                          >
                            {title}
                          </HashLink>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
        </Button>
      </div>
    </>
  );
};

export default ToggleButton;
