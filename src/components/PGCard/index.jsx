/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "../UI/Image";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const colors = ["bg-[#618264]", "bg-[#007186]", "bg-[#EF6262]", "bg-[#3085C3]"];

const PGCard = ({ index, data }) => {
  const { thumbnail, title, description, location, startingPrice } = data;

  return (
    <div className="w-full h-full md:h-[250px]">
      <div className="flex flex-col md:flex-row justify-between h-full shadow-lg rounded-2xl">
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full card__inner__shadow rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl"></div>
          <Image
            className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl"
            src={thumbnail}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between border-t border-b p-5 bg-brand__ash">
          <h3 className="text-brand__font__size__md font-brand__font__bold font-brand__font__family__fancy capitalize leading-tight">
            {title}
          </h3>
          <h3 className="flex items-center font-brand__font__bold capitalize">
            {location.name}, {location.country}
          </h3>

          <p className="text-brand__font__size__sm -tracking-wide">
            {description.slice(0, 100) + "..."}
          </p>
          <Link
            className={`block w-fit ml-auto text-center py-2 px-4 rounded ${colors[index]} hover:bg-brand__light__cyan duration-300 text-white`}
            to="/package-detail/1"
          >
            Explore
          </Link>
        </div>

        <div
          className={`flex-1 ${colors[index]} rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl md:rounded-br-2xl text-white flex flex-col items-center justify-center gap-3 py-5`}
        >
          <Rating
            className="text-brand__font__size__md"
            readonly
            initialRating={5}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
          />
          <h6 className="leading-tight">Starting From</h6>
          <h6 className="leading-tight">
            BDT{" "}
            <span className="font-brand__font__bold text-brand__font__size__xl">
              {startingPrice}
            </span>
          </h6>
          <h6 className="leading-tight">Per Person</h6>
        </div>
      </div>
    </div>
  );
};

export default PGCard;
