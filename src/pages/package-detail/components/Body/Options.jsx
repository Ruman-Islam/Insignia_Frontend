/* eslint-disable react/prop-types */

import { IoIosOptions } from "react-icons/io";

const Options = ({ packageDetail }) => {
  return (
    <div id="options" className="mt-5 border-t py-2">
      <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
        <IoIosOptions size={20} />
        <span className="text-brand__font__size__md">Options</span>
      </h6>
      <div className="pl-6 text-brand__font__size__sm mt-6">
        <ul className="list-disc max-w-[300px] w-full">
          {packageDetail?.options.map((item, index) => (
            <li key={index} className="mb-3">
              <h6 className="uppercase text-brand__navy__blue font-brand__font__bold text-brand__font__size__base">
                {item?.title}
              </h6>
              <p className="font-brand__font__thin">{item?.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
