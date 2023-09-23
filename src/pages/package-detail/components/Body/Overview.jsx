/* eslint-disable react/prop-types */
import { BsGlobe } from "react-icons/bs";

const Overview = ({ packageDetail }) => {
  return (
    <div id="overview">
      <h6 className="flex items-center gap-x-1 text-brand__navy__blue font-brand__font__bold">
        <BsGlobe size={20} />
        <span className="text-brand__font__size__md">Overview</span>
      </h6>

      <div className="pl-6">
        <div className="mt-5 mb-8">
          <p className="text-brand__font__size__sm text-brand__detail__text">
            {packageDetail?.overview?.description}
          </p>
        </div>

        {packageDetail?.overview?.steps?.length && (
          <div>
            <p className="underline text-brand__font__size__sm text-brand__detail__text font-brand__font__bold">
              For booking this tour, please follow the following steps,
            </p>
            <div className="flex flex-col my-4 gap-4">
              {packageDetail?.overview?.steps.map((item, index) => (
                <span
                  key={index}
                  className="text-brand__navy__blue font-brand__font__bold text-brand__font__size__sm"
                >
                  Step {index + 1}: {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <span className="text-brand__font__size__sm font-brand__font__bold text-brand__detail__text">
          {packageDetail?.overview?.NB}
        </span>
      </div>
    </div>
  );
};

export default Overview;
