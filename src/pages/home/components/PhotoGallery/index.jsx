import Image from "../../../../components/UI/Image";
import { photoGalleryData } from "../../../../constants/common";

const PhotoGallery = () => {
  return (
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-5 lg:py-10 w-full">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b border-brand__cyan pr-3 w-fit">
            Photos from Travelers
          </h2>
          <h3 className="text-brand__font__size__md mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate iure!
          </h3>
        </div>

        <div className="p-10 border rounded-xl shadow-md">
          <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            {photoGalleryData.map((item, i) => (
              <Image
                key={i}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
