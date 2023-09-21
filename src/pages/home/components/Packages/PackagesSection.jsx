import Image from "../../../../components/UI/Image";
import { packagesData } from "../../../../constants/common";
import thumb__1 from "../../../../assets/images/banner/packages__thumbnails/thumb__1.jpg";
import thumb__2 from "../../../../assets/images/banner/packages__thumbnails/thumb__2.jpeg";
import thumb__3 from "../../../../assets/images/banner/packages__thumbnails/thumb__3.webp";
import thumb__4 from "../../../../assets/images/banner/packages__thumbnails/thumb__4.jpeg";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const thumbs = [thumb__1, thumb__2, thumb__3, thumb__4];

const PackagesSection = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-5">
        {packagesData.map((item, i) => {
          return (
            <div className="w-full h-full md:max-h-[500px] mb-5" key={i}>
              <h3 className="text-brand__font__size__lg font-brand__font__bold pl-2 pb-2">
                {item?.country}
              </h3>
              <div className="flex flex-col md:flex-row justify-between h-full shadow-lg rounded-3xl">
                <div className="flex-1 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full card__inner__shadow rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl"></div>
                  <Image
                    className="w-full h-full object-cover rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl"
                    src={thumbs[i]}
                  />
                </div>
                <div className="flex-1 border p-5 bg-brand__white">
                  <h3 className="text-brand__font__size__md font-brand__font__bold font-brand__font__family__fancy leading-tight mb-3">
                    {item?.title}
                  </h3>
                  <p className="text-brand__font__size__sm leading-snug -tracking-wide mb-3">
                    {item?.description}
                  </p>

                  <Link
                    className={`block w-fit ml-auto text-center py-2 px-4 rounded ${item?.color} hover:bg-brand__cyan duration-300 text-white`}
                    to="/"
                  >
                    Explore
                  </Link>
                </div>
                <div
                  className={`flex-1 ${item?.color} rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl text-white flex flex-col items-center justify-center gap-3 py-5`}
                >
                  <h3 className="text-brand__font__size__lg font-brand__font__semibold">
                    {item?.reviewCount} reviews
                  </h3>
                  <Rating
                    className="text-brand__font__size__md"
                    readonly
                    initialRating={item?.rating}
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar />}
                  />
                  <h3 className="text-brand__font__size__xl font-brand__font__bold">
                    ${item?.price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackagesSection;
