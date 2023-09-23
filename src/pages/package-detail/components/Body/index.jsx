/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import { hashLinks } from "../../constants";
import Overview from "./Overview";
import Location from "./Location";
import Timing from "./Timing";
import InclusionExclusion from "./inclusionExclusion";
import Description from "./Description";
import Options from "./Options";
import Policy from "./Policy";

const Body = ({ packageDetail, id }) => {
  return (
    <div className="my-5 bg-white rounded-md">
      <div className="border-b p-3 flex gap-10 font-brand__font__bold sticky top-[80px] bg-white text-brand__navy__blue">
        {hashLinks.map((link) => (
          <HashLink key={link?.title} to={`/package-detail/${id}${link?.link}`}>
            {link?.title}
          </HashLink>
        ))}
      </div>

      <div className="p-3">
        <Overview packageDetail={packageDetail} />

        <Location packageDetail={packageDetail} />

        <Timing packageDetail={packageDetail} />

        <InclusionExclusion packageDetail={packageDetail} />

        <Description packageDetail={packageDetail} />

        <Options packageDetail={packageDetail} />

        <Policy packageDetail={packageDetail} />
      </div>
    </div>
  );
};

export default Body;
