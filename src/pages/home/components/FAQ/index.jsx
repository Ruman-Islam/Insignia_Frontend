import Image from "../../../../components/UI/Image";
import FaqAccordion from "./FaqAccordion";
import faqImg from "../../../../assets/images/background/FAQ-header-image.png";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section className="h-full relative my-10 md:my-24">
      <div className="max-w-screen-xl mx-auto p-content__padding flex flex-col items-center relative h-full">
        <div className="max-w-[450px]">
          <Image src={faqImg} className="w-full h-full" />
        </div>

        <div className="w-full">
          <FaqAccordion />

          <div className="mt-16 h-[180px] bg-faq__background bg-center bg-cover flex rounded">
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
                  to="/"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
