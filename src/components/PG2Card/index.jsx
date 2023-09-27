/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Image from "../UI/Image/index";
import { ImLocation } from "react-icons/im";

const PG2Card = ({ data }) => {
  const { thumbnail, title, location, startingPrice, timing, id } = data;
  return (
    <HashLink to={`/package-detail/${id}`} className="block" key={id}>
      <div className="flex flex-col md:flex-row justify-between h-full lg:h-[250px] bg-white rounded-md border mb-2">
        <div className="basis-[30%] w-full h-full p-4">
          <Image src={thumbnail} className="w-full h-full object-cover" />
        </div>

        <div className="basis-[70%] p-5 flex flex-col md:flex-row gap-5 justify-between text-brand__navy__blue">
          <div className="text-brand__font__size__sm leading-relaxed">
            <h2 className="text-brand__font__size__md font-brand__font__semibold capitalize">
              {title}
            </h2>
            <h3 className="flex items-center gap-x-1 font-brand__font__bold my-2 capitalize">
              <ImLocation />{" "}
              <span>
                {location.name}, {location.country}
              </span>
            </h3>
            <h3>
              <span className="font-brand__font__semibold">Pickup Point:</span>{" "}
              <span className="text-gray-500 capitalize">
                {location.pickUpPoint}
              </span>
            </h3>
            <h3>
              <span className="font-brand__font__semibold">Around:</span>{" "}
              <span className="text-gray-500 capitalize">
                {location.around}
              </span>
            </h3>
            <h3>
              {" "}
              <span className="font-brand__font__semibold">Timing:</span>{" "}
              <span className="text-gray-500 capitalize">
                {timing.timeSlot}
              </span>
            </h3>
            <div className="mt-3">
              <h6>Tags:</h6>
              <div className="flex flex-wrap gap-3 text-brand__font__size__xs">
                <div className="py-1 px-1.5 bg-[#EBF0F4] rounded">
                  Adventure
                </div>
                <div className="py-1 px-1.5 bg-[#EBF0F4] rounded">
                  Adventure
                </div>
                <div className="py-1 px-1.5 bg-[#EBF0F4] rounded">
                  Adventure
                </div>
                <div className="py-1 px-1.5 bg-[#EBF0F4] rounded">
                  Adventure
                </div>
              </div>
            </div>
          </div>

          <div className="text-right h-full flex flex-col justify-end">
            <h6 className="text-brand__font__size__xs">Starting From</h6>
            <h6>
              BDT{" "}
              <span className="font-brand__font__bold text-brand__font__size__lg">
                {startingPrice}
              </span>
            </h6>
            <h6>Per Person</h6>
          </div>
        </div>
      </div>
    </HashLink>
  );
};

export default PG2Card;
