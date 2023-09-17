import Card from "../../../../components/Card";
import Button from "../../../../components/UI/Button";
import { foreignerPackages } from "../../../../constants/common";

const Foreigner = () => {
  // bg-[#F3F4F6]
  return (
    <section className="relative w-full">
      <div className="">
        <div className="text-center mt-20 mb-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-5 font-font__bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-brand__cyan to-red-400 py-2.5">
            Foreigners for Bangladesh
          </h2>
          <h3 className="text-lg">
            Book these experiences for a close-up look at Foreigner travelers.
          </h3>
        </div>

        <div>
          <div className="p-content__padding max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {foreignerPackages?.slice(0, 4)?.map((pkg) => (
                <Card key={pkg.id} pkg={pkg} />
              ))}
            </div>

            <div className="w-full flex justify-end py-4">
              <Button className="py-2 px-5 rounded-full bg-brand__cyan hover:bg-brand__light__cyan duration-300 text-brand__white font-font__semibold">
                View More
              </Button>
            </div>
          </div>

          <div className="bg-[#FFFAED] w-full py-10 mt-5">
            <div className="p-content__padding max-w-screen-xl mx-auto flex justify-between">
              <div className="flex-1">
                <h3 className="text-3xl leading-relaxed">
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
