import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";
import Search from "../../../../components/Search";

const Banner = () => {
  return (
    <section className="h-full">
      <div className="h-[100vh] bg-black">
        <BannerBackground />

        <div className="flex flex-col-reverse md:flex-col items-center justify-center p-content__padding max-w-screen-xl absolute -top-20 bottom-0 left-0 right-0 m-auto h-2/6">
          <BannerContent />

          <div className="w-full">
            <h1 className="text-xl md:text-5xl text-brand__white p-content__padding font-bold italic pb-2 text-center md:text-start">
              Where to?
            </h1>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
