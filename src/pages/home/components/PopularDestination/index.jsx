import {
  popularDestination,
  popularDesignationCarouselResponsive,
} from "../../../../constants/common";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PDCard from "../../../../components/PDCard";

const PopularDestination = () => {
  return (
    <section className="pt-5 bg-gradient-to-b from-white from-10%  to-brand__ash__light to-90%">
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="md:py-10 w-full mb-4">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b border-brand__cyan pr-3 w-fit">
            Popular Destination
          </h2>
          <h3 className="text-brand__font__size__md mt-2">
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
          {popularDestination?.map((item, index) => (
            <PDCard key={index} data={item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PopularDestination;
