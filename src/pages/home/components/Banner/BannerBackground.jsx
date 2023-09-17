import { useEffect, useState } from "react";
import { bannerImages } from "../../../../constants/common";
import Image from "../../../../components/UI/Image";

const BannerBackground = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = bannerImages.length;
  const autoZoom = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoZoom) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [auto, autoZoom, currentSlide, slideInterval]);

  return (
    <div className="h-full overflow-hidden">
      <div className="w-full h-full bg-center opacity-[0.6]">
        {bannerImages.map((img, index) => {
          return (
            <div key={index}>
              {index === currentSlide && (
                <Image
                  className="animate-zoom__in object-cover w-full h-[100vh]"
                  src={img}
                  alt="Banner"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerBackground;
