import PGCard from "../../../../components/PGCard";
import { mockData } from "../../../../constants/common";

const PackagesSection = () => {
  return (
    <div
      id="package-section"
      className="pt-10 max-w-[900px] mx-auto p-content__padding"
    >
      <div className="flex flex-col gap-5">
        {mockData?.slice(0, 4)?.map((item, index) => (
          <PGCard key={item.id} index={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
