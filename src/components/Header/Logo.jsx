/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import brand___logo from "../../assets/images/brand/brand_logo.png";

const Logo = ({className}) => {
  return (
    <div className={className}>
      <Link to={"/"}>
        <img
          src={brand___logo}
          alt="Insigina"
          className="w-[90px] md:w-[100px] xl:w-[120px] h-[45px] md:h-[50px] xl:h-[60px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
