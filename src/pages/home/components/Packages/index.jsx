import Banner from "./Banner";
import PackagesSection from "./PackagesSection";

const Packages = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-5 lg:pt-10 w-full mb-4">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight">
            Checkout Our Packages
          </h2>
          <h3 className="text-brand__font__size__base mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            <br />
            cupiditate architecto perferendis officia voluptas, dicta corrupti
            amet ullam doloremque iure!
          </h3>
        </div>

        <div
          id="package-section"
          className="border-2 border-gray-200 rounded-3xl w-full flex flex-col justify-center items-center bg-white shadow-2xl"
        >
          <div className="w-full">
            <Banner />

            <PackagesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
