/* eslint-disable react/prop-types */

import { HashLink } from "react-router-hash-link";

const BookingCard = ({ packageDetail }) => {
  return (
    <div className="lg:max-w-[290px] w-full sticky top-[139px] bg-white p-3 border shadow-xl">
      <div className="font-brand__font__bold text-brand__navy__blue">
        <h3>Options</h3>
      </div>
      <div className="w-full my-2">
        <select
          className="w-full outline-none border p-2 rounded-sm"
          name=""
          id=""
          defaultValue="Select Option"
        >
          <option disabled defaultChecked defaultValue="Select Option">
            Select Option
          </option>
          <option value="regular">Regular</option>
          <option value="premium">Premium</option>
          <option value="delux">Delux</option>
        </select>
      </div>
      <div className="text-center flex flex-col items-center gap-1 py-2 text-brand__navy__blue">
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
      <HashLink
        className="block bg-brand__orange hover:shadow-lg  hover:shadow-brand__orange duration-300 text-center p-2 rounded-sm text-white font-brand__font__semibold"
        to="/"
      >
        Continue
      </HashLink>
    </div>
  );
};

export default BookingCard;
