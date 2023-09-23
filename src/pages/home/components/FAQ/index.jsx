import Image from "../../../../components/UI/Image";
import FaqAccordion from "./FaqAccordion";
import faqImg from "../../../../assets/images/background/FAQ-header-image.png";
import AskQuestion from "./AskQuestion";

const Faq = () => {
  return (
    <section className="h-full md:h-[830px] py-5 relative bg-faq__background bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black bg-opacity-50"></div>
      <div className="max-w-screen-xl mx-auto p-content__padding flex flex-col items-center justify-center relative h-full">
        <div className="max-w-[450px] mr-auto">
          <Image src={faqImg} className="w-full h-full" />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-5">
          <FaqAccordion />

          <AskQuestion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
