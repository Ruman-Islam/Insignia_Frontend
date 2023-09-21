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

const Testimonial = () => {
  return (
    <section className="pt-10 lg:pt-20 mt-10">
      <div className="max-w-screen-xl w-full mx-auto p-content__padding">
        <div className="pb-10 px-5 w-full bg-testimonial__background bg-center bg-cover">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight bg-white w-fit ms-auto">
            What Travelers says
          </h2>
          <h3 className="text-brand__font__size__md w-fit ms-auto bg-white">
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
            <div className="bg-white text-black opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute left-0 cursor-pointer">
              <BsFillArrowLeftCircleFill />
            </div>
          }
          customRightArrow={
            <div className="bg-white text-black opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute right-0 cursor-pointer">
              <BsFillArrowRightCircleFill />
            </div>
          }
          responsive={faqCarouselResponsive}
        >
          {reviewData?.map((item, index) => (
            <RVCard key={index} data={item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
