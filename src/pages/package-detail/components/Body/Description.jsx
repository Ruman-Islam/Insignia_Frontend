/* eslint-disable react/prop-types */
import { MdOutlineDescription } from "react-icons/md";

const Description = ({ packageDetail }) => {
  return (
    <div id="description">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
            <MdOutlineDescription size={20} />
            <span className="text-brand__font__size__md">Description</span>
          </h6>
        </div>
        <div className="pl-10 text-brand__font__size__sm">
          <p>{packageDetail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
