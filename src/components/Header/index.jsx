import { Link } from "react-router-dom";
import brand___logo from "../../assets/images/brand/brand_logo.png";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-screen-xl m-auto flex justify-between fixed left-0 right-0 w-full z-50 h-20 items-center">
        <div>
          <Link to={"/"}>
            <img
              src={brand___logo}
              alt="Insigina"
              className="w-[120px] h-[60px]"
            />
          </Link>
        </div>
        <div>nav</div>
        <div>icon</div>
      </div>
    </header>
  );
};

export default Header;
