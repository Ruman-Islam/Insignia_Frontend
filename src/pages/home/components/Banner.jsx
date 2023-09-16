import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";
import Search from "../../../components/Search";

const Banner = () => {
  return (
    <section className="h-full">
      <div className="h-[100vh] bg-black">
        <BannerBackground />

        <div className="flex flex-col-reverse md:flex-col items-center justify-center p-content__padding max-w-screen-xl absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-2/6">
          <BannerContent />

          <Search />
        </div>
      </div>
    </section>
  );
};

export default Banner;
