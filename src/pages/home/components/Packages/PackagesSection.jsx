import PGCard from "../../../../components/PGCard";
import { packagesData } from "../../../../constants/common";

const PackagesSection = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-5">
        {packagesData.map((item, index) => {
          return <PGCard key={index} index={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default PackagesSection;
