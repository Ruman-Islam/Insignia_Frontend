import { navItems } from "../../constants/navigation";
import { BsChevronDown } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useRef, useState } from "react";

const PcNavigation = () => {
  return (
    <div className="border hidden lg:block border-brand__gray__border rounded-full backdrop-filter backdrop-blur-lg font-brand__font__semibold shadow-md">
      <ul className="flex items-center px-1 lg:px-2 xl:px-4 py-0.5 xl:py-1 duration-200">
        {navItems.map(({ title, route }) => (
          <li
            className="group flex items-center hover:bg-bg__gray rounded-full duration-500 relative"
            key={title}
          >
            <HashLink
              className="block rounded-full mx-1 capitalize py-3 xl:py-3 px-4 text-brand__font__size__sm"
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

      {/* We will use Headless UI menu another place */}
      {/* <Menu as="div" className="relative inline-block text-left">
        <ul className="flex items-center px-1 lg:px-2 xl:px-4 py-0.5 xl:py-1 duration-200">
          {navItems.map(({ title, route }) => (
            <Menu.Button
              key={title}
              className="group flex items-center hover:bg-bg__gray rounded-full duration-500 relative"
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
            </Menu.Button>
          ))}
        </ul>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-28 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronDown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsChevronDown
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronDown
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu> */}
    </div>
  );
};

export default PcNavigation;
