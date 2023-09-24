/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import { hashLinks } from "../../constants";
import Overview from "./Overview";
import Location from "./Location";
import Timing from "./Timing";
import InclusionExclusion from "./InclusionExclusion";
import Description from "./Description";
import Options from "./Options";
import Policy from "./Policy";
import { useLocation } from "react-router-dom";
import BookingCard from "./BookingCard";

// It uses to take the scroll to specific height
const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth",
  });
};

const Body = ({ packageDetail, id }) => {
  const { hash } = useLocation();

  return (
    <section>
      <div className="my-5 bg-white rounded-md">
        <div className="border-b p-4 flex flex-wrap gap-x-5 font-brand__font__bold sticky top-[80px] z-10 bg-white text-brand__navy__blue text-brand__font__size__sm lg:text-brand__font__size__base">
          {hashLinks.map(({ title, link }) => (
            <HashLink
              smooth
              key={title}
              to={`/package-detail/${id}${link}`}
              className={`block relative before:absolute before:-bottom-[0px] md:before:-bottom-[16px] before:left-0 before:right-0 before:border-brand__navy__blue  before:h-full  ${
                hash.includes(link)
                  ? "before:border-b before:w-full"
                  : "before:w-0 before:hover:border-b before:hover:w-full before:duration-300"
              }`}
              scroll={(el) => scrollWithOffset(el, 125)}
            >
              {title}
            </HashLink>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-x-5">
          <div className="basis-[70%] w-full pr-3">
            <Overview packageDetail={packageDetail} />

            <Location packageDetail={packageDetail} />

            <Timing packageDetail={packageDetail} />

            <InclusionExclusion packageDetail={packageDetail} />

            <Description packageDetail={packageDetail} />

            <Options packageDetail={packageDetail} />

            <Policy packageDetail={packageDetail} />
          </div>

          <div className="basis-[30%] w-full my-2">
            <BookingCard packageDetail={packageDetail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
