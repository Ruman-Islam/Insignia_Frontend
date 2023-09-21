import AskQuestion from "./AskQuestion";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className="h-full relative my-10 md:my-20">
      <div className="bg-faq__background bg-center bg-cover max-w-screen-xl mx-auto h-full p-content__padding flex flex-col gap-5 md:flex-row justify-center md:justify-between items-center relative py-8 rounded shadow-lg">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-70 rounded"></div>
        <FaqAccordion />
        <AskQuestion />
      </div>
    </section>
  );
};

export default Faq;
