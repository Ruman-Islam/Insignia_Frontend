/* eslint-disable react/prop-types */
import { AiOutlineCheck, AiOutlineDeploymentUnit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const InclusionExclusion = ({ packageDetail }) => {
  return (
    <div className="mt-5 border-t py-2">
      <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
        <AiOutlineDeploymentUnit size={20} />
        <span className="text-brand__font__size__md">
          Inclusion & Exclusion
        </span>
      </h6>
      <div className="pl-6 text-brand__font__size__sm mt-6">
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
              <RxCross2 size={12} className="text-red-600" />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusion;
