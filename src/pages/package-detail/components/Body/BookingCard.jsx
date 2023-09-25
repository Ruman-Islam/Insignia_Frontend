/* eslint-disable react/prop-types */
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { Listbox } from "@headlessui/react";
import Button from "../../../../components/UI/Button";

import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Styles from "../../styles/Styles.module.css";
import { options } from "../../../../constants/packageDetails";

const BookingCard = ({ packageDetail }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState(options[0]);
  const [travelers, setTravelers] = useState(1);

  const handleAddTraveler = () => {
    setTravelers((prev) => prev + 1);
  };

  const handleRemoveTraveler = () => {
    setTravelers((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const MyContainer = ({ className, children }) => {
    return (
      <div className="absolute -top-4">
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="max-w-[300px] mr-auto lg:ms-auto sticky top-[139px] bg-white p-3 rounded-md shadow-xl flex flex-col gap-y-3 border">
      {/* .........Journey date start......... */}
      <div className="w-full p-2 border rounded-md relative">
        <p className="text-brand__font__size__sm text-gray-600">Journey Date</p>
        <div className="text-brand__navy__blue">
          <span className="text-brand__font__size__md font-brand__font__semibold">
            {new Date(startDate).toDateString()}
          </span>
        </div>
        <Button
          onClick={() => setStartDate(new Date())}
          className="absolute z-[1] top-2 right-2 hover:text-brand__dangerous"
        >
          <MdOutlineClear size={20} />
        </Button>
        <div className="absolute">
          <DatePicker
            minDate={startDate}
            onChange={(date) => setStartDate(date)}
            className={`${Styles.date__picker__input}`}
            calendarContainer={MyContainer}
          />
        </div>
      </div>
      {/* .........Journey date end......... */}

      {/* .........Select traveler start......... */}
      <div className="w-full outline-none p-2 rounded-md flex justify-between items-center text-brand__navy__blue border">
        <div className="w-full">
          <h3>Total Traveler</h3>
          <span className="font-brand__font__semibold text-brand__font__size__md">
            {travelers} Person{travelers > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex justify-end gap-x-3 w-full h-full text-white">
          <Button
            className="bg-green-500 rounded-full"
            onClick={handleAddTraveler}
          >
            <AiOutlinePlusCircle size={25} />
          </Button>
          <Button
            className="bg-brand__dangerous rounded-full"
            onClick={handleRemoveTraveler}
          >
            <AiOutlineMinusCircle size={25} />
          </Button>
        </div>
      </div>
      {/* .........Select traveler end......... */}

      {/* .........Options Start............... */}
      <div className="h-[70px]">
        <div className="font-brand__font__bold text-brand__navy__blue px-2">
          <h3>Options</h3>
        </div>
        <div className="w-full relative">
          <div className="absolute top-0 w-full ">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 capitalize ">
                <Listbox.Button className="w-full rounded-md py-2 pl-3  text-left border text-brand__font__size__sm text-gray-600 capitalize">
                  <span>{selected.option}</span>
                  <span className="absolute top-0 bottom-0 right-0 flex items-center pr-2">
                    <BiChevronDown />
                  </span>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg border text-brand__font__size__sm">
                  {options.map((option, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-pointer py-2.5 pl-10 pr-4 ${
                          active
                            ? "bg-brand__ash__light text-brand__navy__blue"
                            : "text-gray-600"
                        }`
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {option.option}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand__navy__blue">
                              <BiChevronDown />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      {/* .........Options end............ */}

      <div className="text-center flex flex-col items-center gap-1 text-brand__navy__blue">
        <p className="font-brand__font__light">Start from</p>
        <p className={` ${packageDetail?.discountPrice && "line-through"}`}>
          BDT {packageDetail?.startingPrice}
        </p>
        {packageDetail?.discountPrice && (
          <p className="font-brand__font__bold text-brand__font__size__md">
            BDT {packageDetail?.discountPrice}
          </p>
        )}
      </div>

      <div>
        <HashLink
          className="block bg-brand__orange hover:shadow-lg  hover:bg-brand__light__cyan duration-300 text-center p-2 rounded-md text-white font-brand__font__semibold"
          to="/"
        >
          Continue
        </HashLink>
      </div>
    </div>
  );
};

export default BookingCard;
