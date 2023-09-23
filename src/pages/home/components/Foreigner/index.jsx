import FPCard from "../../../../components/FPCard";
import Button from "../../../../components/UI/Button";
import { foreignerPackages } from "../../../../constants/common";
import UseNavbar from "../../../../hooks/UseNavbar";

const Foreigner = () => {
  const { navbar } = UseNavbar();
  return (
    <section className="relative w-full bg-brand__ash__light">
      <div>
        <div
          className={`text-center absolute duration-300 ${
            navbar ? "-top-10 md:-top-20" : "top-0"
          } left-0 right-0 z-10 bg-white w-fit mx-auto px-10 py-6 rounded-md shadow-xl`}
        >
          <h2 className="text-brand__font__size__md lg:text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy bg-landing__masking__title bg-cover bg-clip-text text-transparent">
            Foreigners for Bangladesh
          </h2>
        </div>

        <div className={`duration-300 ${navbar ? "pt-20 md:pt-28" : "pt-0"}`}>
          <div className="p-content__padding max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {foreignerPackages?.slice(0, 4)?.map((pkg, index) => (
                <FPCard key={index} pkg={pkg} />
              ))}
            </div>

            <div className="w-full flex justify-end py-4">
              <Button className="py-2 px-5 rounded-full bg-brand__cyan hover:bg-brand__light__cyan duration-300 text-brand__white font-font__semibold">
                View More
              </Button>
            </div>
          </div>

          <div className="shadow-inner w-full py-10 mt-5 bg-white">
            <div className="p-content__padding max-w-screen-xl mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
              <div className="flex-1">
                <h3 className="text-3xl md:leading-relaxed font-brand__font__family__fancy">
                  Discover a Mesmerazing <br />
                  Nature Landscape & <br />
                  Stunning Culture
                </h3>
              </div>

              <div className="basis-2/5 flex flex-col items-end">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequuntur velit eius accusantium in, minima sapiente
                  impedit obcaecati maxime modi provident numquam!
                </p>
                <div>
                  <Button className="py-2 px-4 rounded-full hover:bg-brand__light__cyan bg-black text-white mt-4 duration-300 font-font__bold">
                    See Our Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foreigner;
