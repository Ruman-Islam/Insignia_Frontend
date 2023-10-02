/* eslint-disable react/prop-types */
import insignia__logo from "../../assets/images/brand/Insignia__logo.png";
import Image from "../UI/Image";
import { HashLink } from "react-router-hash-link";

const Logo = () => {
  return (
    <HashLink className="block" to={"/#"}>
      <Image
        src={insignia__logo}
        alt="Insigina__logo"
        className="w-[80px] md:w-[100px] xl:w-[130px]"
      />
    </HashLink>
  );
};

export default Logo;
