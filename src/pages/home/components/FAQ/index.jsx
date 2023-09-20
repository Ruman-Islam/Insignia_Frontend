import AskQuestion from "./AskQuestion";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className="h-full bg-faq__background bg-center bg-cover bg-no-repeat relative py-8 md:py-16">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-70"></div>
      <div className="max-w-screen-xl mx-auto h-full p-content__padding flex flex-col gap-5 md:flex-row justify-center md:justify-between items-center relative">
        <FaqAccordion />
        <AskQuestion />
      </div>
    </section>
  );
};

export default Faq;
