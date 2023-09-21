/* eslint-disable react/prop-types */
import { BsQuote } from "react-icons/bs";

const RVCard = ({ data }) => {
  const { text, name, profession } = data;
  
  return (
    <div className="p-4 w-full max-h-[450px] h-full">
      <div className="h-full flex flex-col justify-between bg-white p-6 rounded-xl">
        <div>
          <BsQuote className="text-4xl text-gray-400" />

          <p className="leading-normal mb-6 text-brand__font__size__base font-brand__font__family__fancy">
            {text?.length > 420 ? text?.slice(0, 420) + "..." : text}
          </p>
        </div>

        <div className="flex items-center border-t pt-2">
          <span className="flex-grow flex flex-col">
            <span className="title-font font-brand__font__bold text-gray-900">
              {name}
            </span>
            <span className="text-gray-500 text-brand__font__size__sm font-brand__font__bold">
              {profession}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RVCard;
