import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/dqlxcdlce/image/upload/v1694844180/banner2_bjcpws.jpg",
  "https://res.cloudinary.com/dqlxcdlce/image/upload/v1694844179/banner1_oelhre.jpg",
  "https://res.cloudinary.com/dqlxcdlce/image/upload/v1694844179/banner3_jqodji.jpg",
];

const BannerBackground = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = images.length;
  const autoZoom = true;
  let slideInterval;
  let intervalTime = 15000;

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
        {images.map((img, index) => {
          return (
            <div key={index}>
              {index === currentSlide && (
                <img
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
