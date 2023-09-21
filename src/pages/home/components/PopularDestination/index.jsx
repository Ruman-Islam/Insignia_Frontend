import {
  popularDestination,
  popularDesignationCarouselResponsive,
} from "../../../../constants/common";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Image from "../../../../components/UI/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularDestination = () => {
  return (
    <section className="pt-5">
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="md:py-10 w-full mb-4">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight">
            Popular Destination
          </h2>
          <h3 className="text-brand__font__size__md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate architecto perferendis officia voluptas, dicta corrupti
            amet ullam doloremque iure!
          </h3>
        </div>

        <Carousel
          arrows
          infinite
          autoPlay
          slidesToSlide={1}
          autoPlaySpeed={5000}
          customLeftArrow={
            <div className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute cursor-pointer">
              <BsFillArrowLeftCircleFill />
            </div>
          }
          customRightArrow={
            <div className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute right-0 cursor-pointer">
              <BsFillArrowRightCircleFill />
            </div>
          }
          responsive={popularDesignationCarouselResponsive}
        >
          {popularDestination?.map((card, index) => (
            <div
              key={index}
              className="max-w-[300px] h-[450px] rounded-2xl overflow-hidden m-2 relative card__inner__shadow bg-center bg-cover bg-no-repeat cursor-pointer"
              style={{ backgroundImage: `url(${card?.backgroundImage})` }}
            >
              {/* <div className="w-full h-full shadow__class">
                <Image src={card?.backgroundUrl} className="w-full h-full shadow__class" />
              </div> */}
              <div className="max-w-[250px] w-full mx-auto flex justify-between items-center p-2 text-white absolute left-0 right-0 bottom-5 backdrop-blur-3xl border border-brand__gray__border rounded-xl">
                <div className="flex flex-col justify-between items-start">
                  <div className="flex items-center gap-x-1 mb-1">
                    <Image
                      className="w-7 h-7 rounded-full"
                      src={card?.imageUrl}
                      alt="Flag"
                    />{" "}
                    <p className="font-brand__font__family__fancy mt-1.5">
                      {card?.country}
                    </p>
                  </div>
                  <p className="text-brand__font__size__sm font-brand__font__semibold">
                    {card?.destination.length > 26
                      ? card?.destination.slice(0, 24) + ".."
                      : card?.destination}
                  </p>
                </div>
                <div>
                  <p className="text-brand__font__size__xs">Start From</p>
                  <p className="text-base font-bold text-end">
                    $<span>{card.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PopularDestination;
