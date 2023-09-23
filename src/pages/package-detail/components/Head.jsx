/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faqCarouselResponsiveForPackageDetail } from "../../../constants/common";
import Image from "../../../components/UI/Image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Head = ({ previews }) => {
  return (
    <div className="w-full h-[435px] flex flex-col md:flex-row gap-1 bg-white mt-10">
      <Carousel
        additionalTransfrom={0}
        className="w-full h-[435px] flex-1 rounded"
        arrows
        infinite
        autoPlay
        autoPlaySpeed={5000}
        customLeftArrow={
          <div className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-2xl absolute cursor-pointer">
            <BsFillArrowLeftCircleFill />
          </div>
        }
        customRightArrow={
          <div className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-2xl absolute right-0 cursor-pointer">
            <BsFillArrowRightCircleFill />
          </div>
        }
        responsive={faqCarouselResponsiveForPackageDetail}
      >
        {previews?.map((item, index) => (
          <div className="h-full w-full" key={index}>
            <Image src={item} className="h-full w-full object-contain" />
          </div>
        ))}
      </Carousel>

      <div className="flex md:flex-col gap-1">
        {previews?.slice(0, 4).map((item, index) => (
          <div className="h-[100px] w-[100px] flex-1" key={index}>
            <Image src={item} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Head;
