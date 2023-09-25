import {
  faqCarouselResponsive,
  reviewData,
} from "../../../../constants/common";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RVCard from "../../../../components/RVCard";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className="pt-10 lg:pb-20 my-10">
      <div className="max-w-screen-xl w-full mx-auto p-content__padding">
        <div className="pb-10 px-5 w-full bg-testimonial__background bg-center bg-cover">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight bg-brand__ash__light w-fit ms-auto">
            What Travelers says
          </h2>
          <h3 className="text-brand__font__size__md w-fit ms-auto bg-brand__ash__light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate iure!
          </h3>
        </div>

        <Carousel
          additionalTransfrom={0}
          className="shadow-lg"
          arrows
          infinite
          autoPlay
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
          responsive={faqCarouselResponsive}
        >
          {reviewData?.map((item, index) => (
            <RVCard key={index} data={item} />
          ))}
        </Carousel>

        <div className="mt-20 h-[180px] bg-ask__qus__background bg-center bg-cover flex rounded-xl w-full shadow-2xl">
          <div className="basis-[40%]"></div>
          <div className="basis-[60%] bg-[#1D1C55] flex flex-col justify-center items-center text-white rounded">
            <div>
              <h4 className="text-brand__font__size__md font-brand__font__semibold">
                Still have a question that needs a
              </h4>
              <h4 className="text-brand__font__size__md font-brand__font__semibold">
                little human touch?
              </h4>
              <Link
                className="block bg-brand__orange w-fit py-1.5 px-3 rounded mt-3"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
