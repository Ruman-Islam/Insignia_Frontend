import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../../../constants/bannerSocialIcons";

const BannerContent = () => {
  return (
    <div className="w-full text-brand__white mb-0 md:mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="basis-5/7">
          <h1 className="text-brand__font__size__xl  lg:text-brand__font__size__xl xl:text-brand__font__size__2xl font-brand__font__bold font-brand__font__family__fancy leading-none">
            Explore your journey with us
          </h1>
          <br />
          <p className="text-brand__font__size__base md:text-brand__font__size__md font-brand__font__light">
            Discover curated destinations, plan seamless itineraries, and create
            unforgettable memories as you embark on your next remarkable journey
            with us.
          </p>
        </div>
        <div className="text-white basis-2/5 flex justify-end mt-4 md:mt-0">
          <div className="flex md:flex-col justify-start md:justify-center items-end gap-5 w-fit rounded-lg">
            {bannerSocialIcons.map(({ Icon, url }) => (
              <Link
                key={url}
                className="hover:text-brand__cyan duration-300"
                to={url}
              >
                <Icon size={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
