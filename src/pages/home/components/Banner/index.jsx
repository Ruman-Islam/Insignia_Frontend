import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";
import Search from "../../../../components/Search";

const Banner = () => {
  return (
    <section className="h-[100vh]">
      <div className="h-full relative overflow-hidden">
        <BannerBackground />
      </div>

      <div className="flex flex-col-reverse md:flex-col items-center justify-center p-content__padding max-w-screen-xl absolute top-0 bottom-0 left-0 right-0 m-auto h-full ">
        <BannerContent />

        <div className="w-full flex flex-col justify-end items-end">
          <h1 className="text-brand__font__size__lg text-brand__white p-content__padding font-brand__font__family__fancy italic pb-2 text-center md:text-start">
            Where to?
          </h1>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Banner;
