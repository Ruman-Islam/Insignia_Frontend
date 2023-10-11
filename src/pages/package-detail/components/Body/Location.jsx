/* eslint-disable react/prop-types */

import { HiOutlineLocationMarker } from "react-icons/hi";

const Location = ({ packageDetail }) => {
  return (
    <div id="location">
      <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4 border-t mt-5">
        <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
          <HiOutlineLocationMarker size={20} />
          <span className="text-brand__font__size__md">Location</span>
        </h6>
      </div>
      <div className="pl-10 text-brand__font__size__sm ">
        <p className="mb-3">
          <span className="text-secondary font-brand__font__bold">
            Pick-up:
          </span>{" "}
          <span>{packageDetail?.location?.pickUpPoint}</span>
        </p>
        <p className="mb-3">
          <span className="text-secondary font-brand__font__bold">
            Around:
          </span>{" "}
          <span>{packageDetail?.location?.around}</span>
        </p>
        <p>
          <span className="text-secondary font-brand__font__bold">
            Recommended Restaurants nearby:
          </span>{" "}
          <span>{packageDetail?.location?.nearbyRestaurant}</span>
        </p>
      </div>
    </div>
  );
};

export default Location;
