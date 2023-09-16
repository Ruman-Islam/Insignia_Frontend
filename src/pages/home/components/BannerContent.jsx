import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../../constants/bannerSocialIcons";


const BannerContent = () => {
    return (
        <div className="w-full text-white mb-0 md:mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="basis-5/7">
                <h1 className="text-5xl xl:text-6xl font-semibold">
                  Explore your journey with us
                </h1>
                <br />
                <p className=" xl:text-lg ml-0.5">
                  Discover curated destinations, plan seamless itineraries, and
                  create unforgettable memories as you embark on your next
                  remarkable journey with us.
                </p>
              </div>
              <div className="text-white basis-2/5 flex md:flex-col justify-start md:justify-center h-full w-full items-end gap-5 mt-4 md:mt-0">
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
    );
};

export default BannerContent;