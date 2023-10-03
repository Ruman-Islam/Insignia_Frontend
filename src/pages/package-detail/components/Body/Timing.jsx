/* eslint-disable react/prop-types */

import { AiOutlineClockCircle } from "react-icons/ai";

const Timing = ({ packageDetail }) => {
  return (
    <div id="timing">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
            <AiOutlineClockCircle size={20} />
            <span className="text-brand__font__size__md">Timing</span>
          </h6>
        </div>
        <div className="pl-10 text-brand__font__size__sm">
          <p>{packageDetail?.timing?.timeSlot}</p>
          <p>
            <span className="text-brand__navy__blue font-brand__font__bold ">
              Duration:
            </span>{" "}
            {packageDetail?.timing?.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timing;
