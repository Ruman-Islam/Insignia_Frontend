import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="absolute before:absolute before:w-full before:h-full before:-top-4 hidden group-hover:block top-12 left-4 w-[200px] mt-2 -ml-2 bg-white text-black font-semibold rounded-md py-2 space-y-2 ">
      <div className="relative bg-white z-50">
        <Link to="/package1" className="block px-4 py-2 hover:bg-gray-200">
          Foreigner
        </Link>
        <Link to="/package2" className="block px-4 py-2 hover:bg-gray-200">
          Bangladesh
        </Link>
        <Link to="/package3" className="block px-4 py-2 hover:bg-gray-200">
          India
        </Link>
        <Link to="/package4" className="block px-4 py-2 hover:bg-gray-200">
          Nepal
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
