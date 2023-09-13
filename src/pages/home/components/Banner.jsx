import { useState, useEffect } from "react";
import b1 from "../../../assets/images/banner/banner1.jpg";
import b2 from "../../../assets/images/banner/banner2.jpg";
import b3 from "../../../assets/images/banner/banner3.jpg";

const images = [b1, b2, b3];

const Banner = () => {
  const [currentItem, setCurrentItem] = useState(b1);

  useEffect(() => {
    let i = 0;
    const changeItem = () => {
      if (i > images.length - 1) {
        i = 0;
      }
      setCurrentItem(images[i]);
      i++;
      setTimeout(changeItem, 15000);
    };
    changeItem();
    return () => clearTimeout(changeItem);
  }, []);

  return (
    <div className="h-full">
      <div className="h-[100vh] bg-black">
        <div className="h-full overflow-hidden">
          <div className="w-full h-full bg-center opacity-[0.6]">
            <img
              className="animate-zoom__in object-cover w-full h-full"
              src={currentItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
