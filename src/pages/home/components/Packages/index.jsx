import Banner from "./Banner";
import PackagesSection from "./PackagesSection";

const Packages = () => {
  return (
    <section className="] pb-20 border-t">
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-5 lg:py-10 w-full mb-4 text-right">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b border-brand__cyan pl-3 w-fit ms-auto">
            Checkout Our Packages
          </h2>
          <h3 className="text-brand__font__size__md mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate architecto perferendis officia voluptas, dicta corrupti
            amet ullam doloremque iure!
          </h3>
        </div>

        <div className="border-2 border-gray-200 rounded-3xl w-full flex flex-col justify-center items-center bg-white shadow-2xl">
          <div className="max-w-[800px] px-2 md:px-0 w-full py-8">
            <Banner />

            <PackagesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
