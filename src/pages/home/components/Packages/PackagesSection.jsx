import { HashLink } from "react-router-hash-link";
import PGCard from "../../../../components/PGCard";
import { mockData } from "../../../../constants/common";

const PackagesSection = () => {
  return (
    <div
      id="package-section"
      className="py-16 max-w-[800px] mx-auto p-content__padding"
    >
      <div className="flex flex-col gap-5">
        {mockData?.slice(0, 4)?.map((item, index) => (
          <PGCard key={item.id} index={index} data={item} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <HashLink
          to="/tour-list"
          className="block py-2 px-5 rounded-3xl bg-brand__cyan hover:bg-brand__light__cyan duration-300 text-brand__white font-font__semibold"
        >
          View More
        </HashLink>
      </div>
    </div>
  );
};

export default PackagesSection;
