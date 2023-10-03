/* eslint-disable react/prop-types */

import { MdPolicy } from "react-icons/md";

const Policy = ({ packageDetail }) => {
  return (
    <div id="policy">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
            <MdPolicy size={20} />
            <span className="text-brand__font__size__md">Policy</span>
          </h6>
        </div>
        <div className="pl-10 text-brand__font__size__sm">
          <div>
            <h4 className="font-brand__font__bold text-brand__navy__blue text-brand__font__size__base">
              Cancellation
            </h4>
            <ul className="list-disc">
              {packageDetail?.policy?.cancellation.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-brand__font__bold text-brand__navy__blue text-brand__font__size__base">
              Refund
            </h4>
            <ul className="list-disc">
              {packageDetail?.policy?.refund.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
