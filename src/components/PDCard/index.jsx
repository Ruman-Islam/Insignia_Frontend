/* eslint-disable react/prop-types */
import Image from "../UI/Image";

const PDCard = ({ data }) => {
  const { backgroundImage, imageUrl, country, destination, price } = data;
  return (
    <div
      className={`max-w-[300px] h-[450px] rounded-2xl overflow-hidden m-2 relative card__inner__shadow bg-center bg-cover bg-no-repeat cursor-pointer`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[250px] w-full mx-auto flex justify-between items-center p-1.5 text-white absolute left-0 right-0 bottom-5 backdrop-blur-3xl border border-brand__gray__border rounded-xl">
        <div className="flex flex-col justify-between items-start">
          <div className="flex items-center gap-x-1 mb-1">
            <Image className="w-7 h-7 rounded-full" src={imageUrl} alt="Flag" />{" "}
            <p className="font-brand__font__family__fancy mt-1.5">{country}</p>
          </div>
          <p className="text-brand__font__size__sm font-brand__font__semibold">
            {destination?.length > 26
              ? destination?.slice(0, 24) + ".."
              : destination}
          </p>
        </div>
        <div>
          <p className="text-brand__font__size__xs">Start From</p>
          <p className="text-base font-bold text-end">
            $<span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDCard;
