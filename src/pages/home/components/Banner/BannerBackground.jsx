import { useEffect, useState } from "react";
import { bannerImages } from "../../../../constants/common";
import Image from "../../../../components/UI/Image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BannerBackground = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay] = useState(true);
  let timeOut = null;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bannerImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setInterval(() => {
        nextSlide();
      }, 15000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="h-full">
      {bannerImages.map((image, index) => {
        return (
          <div
            key={index}
            className={`w-full h-full absolute before:absolute before:top-0 before:w-full before:h-full before:bg-black before:opacity-[0.5] ${
              index == currentSlide ? "animate-zoom__in" : "opacity-0"
            }`}
          >
            <Image className="w-full h-full object-cover" src={image} alt="" />
          </div>
        );
      })}

      <div className="absolute z-10 bottom-0 left-0 right-0 mx-auto flex h-fit w-fit gap-x-5 mb-5">
        <div className="text-white opacity-70 hover:opacity-100 duration-300 rounded-full text-4xl cursor-pointer">
          <BsFillArrowLeftCircleFill onClick={prevSlide} />
        </div>
        <div className="text-white opacity-70 hover:opacity-100 duration-300 rounded-full text-4xl cursor-pointer">
          <BsFillArrowRightCircleFill onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
