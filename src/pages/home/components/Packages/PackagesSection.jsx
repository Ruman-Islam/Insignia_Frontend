import PGCard from "../../../../components/PGCard";
import { mockData } from "../../../../constants/common";
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";

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
        <ViewMoreBtn
          route="/tour-list"
          className="text-brand__cyan border-brand__cyan hover:bg-brand__cyan hover:text-white"
        >
          <span>view more</span>
        </ViewMoreBtn>
      </div>
    </div>
  );
};

export default PackagesSection;
