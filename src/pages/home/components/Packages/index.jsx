import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";
import Banner from "./Banner";
import PackagesSection from "./PackagesSection";

const Packages = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-7 md:py-14 w-full text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b border-brand__cyan pr-3">
            Checkout Our Packages
          </h2>
          <h3 className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            <br />
            cupiditate architecto perferendis officia voluptas, dicta corrupti
            amet ullam doloremque iure!
          </h3>
        </div>

        <div className="rounded-3xl w-full flex flex-col justify-center items-center bg-white shadow-2xl mb-10">
          <div className="w-full">
            <Banner />

            <PackagesSection />
          </div>

          <div className="w-full flex justify-center my-5">
            <ViewMoreBtn
              route="/tour-list"
              className="text-brand__cyan border-brand__cyan hover:bg-brand__cyan hover:text-white"
            >
              <span>view more</span>
            </ViewMoreBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
