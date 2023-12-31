import { useState } from "react";
import { windowImages } from "../../../../constants/common";
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";

const Window = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    windowImages[0]?.imageUrl
  );

  const changeBackGround = (item) => {
    setBackgroundImage(item?.imageUrl);
  };

  return (
    <section className="w-full h-[90vh] relative">
      <div
        className={`bg-cover bg-center bg-no-repeat w-full h-full transition-all`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {windowImages.map((item, index) => {
          return (
            <div
              onMouseEnter={() => changeBackGround(item)}
              className={`relative overflow-hidden flex-1 flex flex-col h-full group text-brand__white ${
                index !== 3 ? "border-r" : "border-r-0"
              } border-brand__gray__border`}
              key={item.text}
            >
              <div className="flex flex-col items-center justify-center px-5 py-10 before:duration-300 relative before:absolute before:top-0 before:left-0 before:bg-black before:w-full before:h-0 group-hover:before:h-full">
                <div
                  className="relative z-10 text-xl flex flex-col items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
              </div>

              <div className="h-full bg-black bg-opacity-0 group-hover:bg-opacity-10 duration-300 flex flex-col justify-center items-center"></div>

              <div className="absolute -bottom-20 group-hover:bottom-0 duration-300 left-0 right-0 w-full mx-auto h-20 flex flex-col items-center justify-center">
                <ViewMoreBtn
                  route="/tour-list"
                  className="text-white border-brand__gray__border backdrop-blur-sm"
                >
                  <span>view more</span>
                </ViewMoreBtn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Window;
