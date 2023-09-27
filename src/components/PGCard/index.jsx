/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "../UI/Image";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import thumb__1 from "../../assets/images/banner/packages__thumbnails/thumb__1.jpg";
import thumb__2 from "../../assets/images/banner/packages__thumbnails/thumb__2.jpeg";
import thumb__3 from "../../assets/images/banner/packages__thumbnails/thumb__3.webp";
import thumb__4 from "../../assets/images/banner/packages__thumbnails/thumb__4.jpeg";

const thumbs = [thumb__1, thumb__2, thumb__3, thumb__4];

const PGCard = ({ index, data }) => {
  const { country, title, description, color, rating, price, url } = data;

  return (
    <div className="w-full h-full">
      <div className="flex flex-col md:flex-row justify-between h-full shadow-lg rounded-3xl">
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full card__inner__shadow rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl"></div>
          <Image
            className="w-full h-full object-cover rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl"
            src={thumbs[index]}
          />
        </div>
        <div className="flex-1 border p-5 bg-brand__ash">
          <h3 className="text-brand__font__size__md font-brand__font__bold font-brand__font__family__fancy leading-tight mb-3">
            {title}
          </h3>
          <p className="text-brand__font__size__sm leading-snug -tracking-wide mb-3">
            {description}
          </p>

          <Link
            className={`block w-fit ml-auto text-center py-2 px-4 rounded ${color} hover:bg-brand__light__cyan duration-300 text-white`}
            to={url}
          >
            Explore
          </Link>
        </div>
        <div
          className={`flex-1 ${color} rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl text-white flex flex-col items-center justify-center gap-3 py-5`}
        >
          <h3 className="text-brand__font__size__lg font-brand__font__semibold">
            {country}
          </h3>
          <Rating
            className="text-brand__font__size__md"
            readonly
            initialRating={rating}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
          />
          <h3 className="text-brand__font__size__xl font-brand__font__bold">
            ${price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PGCard;
