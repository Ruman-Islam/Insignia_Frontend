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
    <section className="py-0 lg:py-10 relative bg-[url('https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2021/03/TrendSpotlight-LineArt-Header.jpg')] bg-cover bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-70"></div>
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-10 w-full text-right text-white relative">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight">
            What Travelers says
          </h2>
          <h3 className="text-brand__font__size__md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate iure!
          </h3>
        </div>

        <Carousel
          className="w-full"
          arrows
          infinite
          autoPlay
          slidesToSlide={1}
          autoPlaySpeed={5000}
          customLeftArrow={
            <div className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute left-0 cursor-pointer">
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
      </div>
    </section>
  );
};

export default Testimonial;
