/* eslint-disable react/prop-types */

import { HiOutlineLocationMarker } from "react-icons/hi";

const Location = ({ packageDetail }) => {
  return (
    <div className="mt-5 border-t py-2">
      <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
        <HiOutlineLocationMarker size={20} />
        <span className="text-brand__font__size__md">Location</span>
      </h6>
      <div className="pl-6 text-brand__font__size__sm mt-6">
        <p className="mb-5">
          <span className="text-brand__navy__blue font-brand__font__bold">
            Pick-up:
          </span>{" "}
          <span>{packageDetail?.location?.pickUpPoint}</span>
        </p>
        <p className="mb-5">
          <span className="text-brand__navy__blue font-brand__font__bold">
            Around:
          </span>{" "}
          <span>{packageDetail?.location?.around}</span>
        </p>
        <p>
          <span className="text-brand__navy__blue font-brand__font__bold">
            Recommended Restaurants nearby:
          </span>{" "}
          <span>{packageDetail?.location?.nearbyRestaurant}</span>
        </p>
      </div>
    </div>
  );
};

export default Location;
