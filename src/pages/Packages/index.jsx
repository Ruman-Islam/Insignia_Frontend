import { useEffect, /* useMemo, */ useState } from "react";
import { Helmet } from "react-helmet";
// import { useLocation } from "react-router-dom";
import "react-range-slider-input/dist/style.css";
import Loader from "../../components/common/Loader";
import Search from "../../components/Search";
import FilterBox from "./components/FilterBox";
import Button from "../../components/UI/Button";
import { FaFilter } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import PG2Card from "../../components/PG2Card";
import { mockData } from "../../constants/common";

// function useQuery() {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search), [search]);
// }

const PackagesListScreen = () => {
  const [value, setValue] = useState([10000, 30000]);
  // const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const query = useQuery();

  const toggleResponsiveFilterBox = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSlider = (value) => {
    console.log(value);
    setValue(value);
  };

  useEffect(() => {
    // fetch(`http://localhost:8080/packages`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPackages(data);
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // console.log(query.get("country"));
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="py-10">
        <div className="max-w-screen-xl w-full m-auto p-content__padding">
          <div className="flex justify-between gap-5">
            <div className="hidden lg:block max-w-[255px] w-full h-fit bg-white shadow-lg rounded-md sticky top-[120px]">
              <FilterBox value={value} handleSlider={handleSlider} />
            </div>

            <div className="flex-1">
              <Search
                firstDivStyles="w-full mb-4"
                secondDivStyles="rounded-full"
              />

              <div>
                {/* {packages.map((item) => (
                  <PG2Card key={item.id} data={item} />
                ))} */}
                {mockData.map((item) => (
                  <PG2Card key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-full">
        <Button
          onClick={() => toggleResponsiveFilterBox(!isFilterOpen)}
          className="flex w-fit lg:hidden items-center gap-x-3 fixed z-[2] bottom-5 left-0 right-5 ms-auto justify-center rounded-md bg-brand__orange text-white py-2 px-4"
        >
          <FaFilter size={16} />
          <span className="font-brand__font__semibold">Filter</span>
        </Button>
        <Drawer
          open={isFilterOpen}
          onClose={toggleResponsiveFilterBox}
          direction="bottom"
          duration={300}
          overlayOpacity={0.5}
          lockBackgroundScroll
          size={350}
          className="block lg:hidden rounded-tl-xl rounded-tr-xl"
        >
          <FilterBox value={value} handleSlider={handleSlider} />
        </Drawer>
      </div>
    </>
  );
};

export default PackagesListScreen;
