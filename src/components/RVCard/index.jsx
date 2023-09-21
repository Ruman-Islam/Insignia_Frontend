/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const RVCard = ({ data }) => {
  const { text, name, rating, time } = data;

  return (
    <div className="h-[420px] border bg-brand__ash rounded">
      <div className="h-full flex flex-col">
        <div className="flex items-center border-b px-6 py-2">
          <span className="flex-grow flex flex-col">
            <span className="font-brand__font__bold text-brand__font__size__md">
              {name}
            </span>
            <Rating
              className="text-brand__font__size__sm text-brand__orange"
              readonly
              initialRating={rating}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
            />
            <span className="text-brand__font__size__xs">{time}</span>
          </span>
        </div>

        <div className="px-6 my-4 h-full overflow-y-auto custom__scrollbar">
          <p className="leading-normal text-brand__font__size__sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default RVCard;
