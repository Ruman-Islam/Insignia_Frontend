/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Image from "../UI/Image/index";
import { ImLocation } from "react-icons/im";

const PG2Card = ({ data }) => {
  const { thumbnail, title, location, startingPrice, timing, id } = data;
  return (
    <div className="flex flex-col md:flex-row justify-between h-full lg:h-[250px] bg-white rounded-md mb-4 border">
      <div className="flex-1 p-4">
        <Image
          className="w-full h-full object-cover rounded-md"
          src={thumbnail}
        />
      </div>

      <div className="basis-[70%] flex flex-col md:flex-row gap-5 justify-between text-secondary">
        <div className="text-brand__font__size__sm leading-relaxed p-4 basis-[75%]">
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
            <span className="text-gray-500 capitalize">{location.around}</span>
          </h3>
          <h3>
            {" "}
            <span className="font-brand__font__semibold">Timing:</span>{" "}
            <span className="text-gray-500 capitalize">{timing.timeSlot}</span>
          </h3>
          <div className="mt-3">
            <h6>Tags:</h6>
            <div className="flex flex-wrap gap-1 text-brand__font__size__xs">
              <div className="py-1 px-2 font-brand__font__bold bg-[#EBF0F4] rounded">
                Adventure
              </div>
              <div className="py-1 px-2 font-brand__font__bold bg-[#EBF0F4] rounded">
                Adventure
              </div>
              <div className="py-1 px-2 font-brand__font__bold bg-[#EBF0F4] rounded">
                Adventure
              </div>
              <div className="py-1 px-2 font-brand__font__bold bg-[#EBF0F4] rounded">
                Adventure
              </div>
            </div>
          </div>
        </div>

        <div className="text-right h-full flex flex-col justify-end basis-[35%] text-white rounded-md bg-pg__card__background bg-cover bg-left bg-no-repeat py-3">
          <div
            className="flex flex-col justify-center gap-3 items-center h-full
            "
          >
            <div>
              <h6 className="text-brand__font__size__xs">Starting From</h6>
              <h6>
                BDT{" "}
                <span className="font-brand__font__bold text-brand__font__size__lg">
                  {startingPrice}
                </span>
              </h6>
              <h6>Per Person</h6>
            </div>
            <HashLink
              to={`/package-detail/${id}`}
              className={`block w-fit mx-auto text-center py-1 px-4 rounded bg-white text-primary font-brand__font__semibold`}
            >
              Explore
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PG2Card;
