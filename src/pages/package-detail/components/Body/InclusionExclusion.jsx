/* eslint-disable react/prop-types */
import { AiOutlineCheck, AiOutlineDeploymentUnit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const InclusionExclusion = ({ packageDetail }) => {
  return (
    <div id="inclusion">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
            <AiOutlineDeploymentUnit size={20} />
            <span className="text-brand__font__size__md">
              Inclusion & Exclusion
            </span>
          </h6>
        </div>
        <div className="pl-10 text-brand__font__size__sm">
          <div>
            {packageDetail?.inclusion.map((item, index) => (
              <p key={index} className="flex items-center gap-x-2">
                <AiOutlineCheck size={12} className="text-green-600" />
                <span>{item}</span>
              </p>
            ))}
          </div>

          <div className="mt-3">
            {packageDetail?.exclusion.map((item, index) => (
              <p key={index} className="flex items-center gap-x-2">
                <RxCross2 size={12} className="text-brand__dangerous" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusion;
