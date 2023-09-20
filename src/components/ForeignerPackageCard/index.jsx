import Button from "../UI/Button";
import Image from "../UI/Image";

/* eslint-disable react/prop-types */
const Card = ({ pkg }) => {
  const { image, price, description, name, location } = pkg;

  return (
    <div className="relative shadow-2xl group overflow-hidden">
      <div className="h-[490px] w-full relative ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>

        {/* Image */}
        <Image className="w-full h-full object-cover" src={image} alt="" />
      </div>
      {/* Content */}
      <div className="absolute bottom-2 group-hover:bottom-[500px] group-hover:opacity-0 duration-700 w-full p-2">
        <div>
          <h2 className="text-white text-sm md:text-base lg:text-xl text-center font-brand__font__bold font-brand__font__family__fancy">
            {name}
          </h2>
          <h3 className="text-white text-md text-center font-font__thin">
            {location}
          </h3>
          <div className="w-[50px] h-0.5 mx-auto bg-white"></div>
        </div>
      </div>
      <div className="absolute -bottom-24 opacity-0 group-hover:bottom-0 group-hover:opacity-100 duration-300 w-full p-2 text-white backdrop-blur-lg flex flex-col items-center justify-center">
        <p className="first-letter:capitalize">{description}</p>
        <small className="my-1">Start From: ${price}</small>
        <Button className="border  py-1 px-4">Explore</Button>
      </div>
    </div>
  );
};

export default Card;
