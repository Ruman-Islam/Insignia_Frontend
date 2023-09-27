import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../../../constants/bannerSocialIcons";

const BannerContent = () => {
  return (
    <div className="w-full text-brand__white">
      <div className="flex flex-col items-start">
        <div className="max-w-screen-lg">
          <h1 className="text-brand__font__size__xl  lg:text-brand__font__size__xl xl:text-brand__font__size__2xl font-brand__font__bold font-brand__font__family__fancy leading-none">
            Explore your journey with us
          </h1>
          <br />
          <p className="text-brand__font__size__base md:text-brand__font__size__md font-brand__font__light max-w-screen-sm">
            Discover curated destinations, plan seamless itineraries, and create
            unforgettable memories as you embark on your next remarkable journey
            with us.
          </p>
        </div>

        <div className="text-white mt-5">
          <div className="flex gap-4 w-fit rounded-lg">
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
