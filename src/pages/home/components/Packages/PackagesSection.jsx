import PGCard from "../../../../components/PGCard";
import { packagesData } from "../../../../constants/common";

const PackagesSection = () => {
  return (
    <div
      id="package-section"
      className="py-16 max-w-[800px] mx-auto p-content__padding"
    >
      <div className="flex flex-col gap-5">
        {packagesData.map((item, index) => {
          return <PGCard key={index} index={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default PackagesSection;
